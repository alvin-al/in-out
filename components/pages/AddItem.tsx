"use client";
import React, { useState, useRef } from "react";
import Button from "@mui/material/Button";
import Html5QrcodePlugin from "@/components/elements/Html5QrcodePlugin";
import useCreateData from "@/hooks/useCreateData";
import BentoList from "../elements/BentoList";
import ActivityAddItem from "../elements/ActivityAddItem";
import PICAddItem from "../elements/PICAddItem";
import supabase from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import { getCookie } from "cookies-next";
import TopBar from "../elements/TopBar";

const AddItem = () => {
  const [listCode, setListCode] = useState<string[]>([]);
  const cooldownRef = useRef<boolean>(false);
  const { createData } = useCreateData("in_out_logs");
  const [pic, setPic] = useState<string>("");
  const [activity, setActivity] = useState<string>("");

  const router = useRouter();

  const handlePicChange = (value: string) => {
    setPic(value);
  };

  const handleActivity = (value: string) => {
    setActivity(value);
  };

  const onNewScanResult = (decodedText: string) => {
    if (cooldownRef.current) return; // If cooldown is active, don't process the scan

    setListCode((prevList) => [...prevList, decodedText]);

    cooldownRef.current = true; // Set cooldown to true
    setTimeout(() => {
      cooldownRef.current = false; // Reset cooldown after 5 seconds
    }, 3000);
  };

  const handleSubmit = async () => {
    const crateOperator = getCookie("user_token") as unknown as number | null;

    // const submitArrayData = listCode.map((code) => ({
    //   activity_type: activity,
    //   pic: pic,
    //   crate_id: code,
    //   timestamp: new Date(Date.now() + 7 * 60 * 60 * 1000).toISOString(),
    //   batch_id: `${batch_date}_${pic}`,
    //   operator: crateOperator,
    // }));
    const submitData = {
      activity_type: activity,
      pic: pic,
      crate_id: listCode,
      timestamp: new Date(Date.now() + 7 * 60 * 60 * 1000).toISOString(),
      operator: crateOperator,
    };

    try {
      // Kirim data log
      await createData([submitData]);

      // Tentukan status berdasarkan aktivitas
      const status = activity === "in"; // Bisa langsung menggunakan boolean

      // Lakukan update untuk setiap crate
      const results = await Promise.all(
        listCode.map((code) =>
          supabase
            .from("crate")
            .update({ available: status }) // Pastikan field sesuai dengan yang ada di tabel
            .match({ crate_code: code })
        )
      );

      // Cek apakah ada error pada salah satu hasil update
      const hasError = results.some((result) => result.error);

      if (hasError) {
        throw new Error("Failed to update some crates.");
      }

      router.push("/confirmation");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <TopBar title='Add Item' />
      <div className='p-4 flex flex-col gap-4'>
        {/* Camera scanner */}
        <div className='h-fit self-center'>
          <Html5QrcodePlugin
            fps={5}
            qrbox={150}
            disableFlip={false}
            qrCodeSuccessCallback={onNewScanResult}
          />
        </div>
        {/* Daftar kerat */}
        <BentoList listCode={listCode} setListCode={setListCode} />
        {/* Aktivitas */}
        <ActivityAddItem onActivitySelect={handleActivity} />
        {/* PIC */}
        <PICAddItem onPicChange={handlePicChange} />
        {/* Submit button */}
        {pic === "" || activity === "" || listCode.length === 0 ? (
          <Button variant='contained' disabled onClick={handleSubmit}>
            Submit
          </Button>
        ) : (
          <Button variant='contained' onClick={handleSubmit}>
            Submit
          </Button>
        )}
      </div>
    </div>
  );
};

export default AddItem;
