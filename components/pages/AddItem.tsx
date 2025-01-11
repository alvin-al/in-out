"use client";
import React, { useState, useRef } from "react";
import Button from "@mui/material/Button";
import Html5QrcodePlugin from "@/components/elements/Html5QrcodePlugin";
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
  const [pic, setPic] = useState<string>("");
  const [activity, setActivity] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const router = useRouter();

  const dateToday = new Date(Date.now() + 7 * 60 * 60 * 1000).toISOString();

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
    if (isSubmitting) return;
    setIsSubmitting(true);

    const { data: getBatchNumber } = await supabase
      .from("in_out_logs")
      .select("batches")
      .order("batches", { ascending: false }) // Mengurutkan berdasarkan batches secara descending
      .limit(1); // Mengambil hanya 1 data terakhir

    const crateOperator = Number(getCookie("user_token")) || null;
    const submitData = listCode.map((items) => ({
      crate_id: items,
      activity_type: activity,
      pic: pic,
      timestamp: dateToday,
      operator: crateOperator,
      batches: getBatchNumber?.[0]?.batches + 1 || 1,
    }));

    try {
      // Insert log data
      const { error } = await supabase.from("in_out_logs").insert(submitData);
      if (error) throw new Error("Gagal mengirim data log");

      // Update crate data
      const status = activity === "in";
      const results = await Promise.allSettled(
        listCode.map((code) =>
          supabase
            .from("crate")
            .update({
              available: status,
              last_update: dateToday,
              user_id: pic,
            })
            .match({ crate_code: code })
        )
      );

      // Check if any update failed
      if (results.some((result) => result.status === "rejected")) {
        throw new Error("Gagal memperbarui data");
      }

      router.push("/confirmation");
    } catch (err) {
      console.error(err);
      if (err instanceof Error) {
        alert(err.message || "Terjadi kesalahan");
      } else {
        alert("Terjadi kesalahan");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <TopBar title='Add Item' />
      <div className='p-4 flex flex-col gap-4'>
        {/* Camera scanner */}
        <div className='self-center '>
          <Html5QrcodePlugin
            fps={5}
            qrbox={200}
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
        {pic === "" ||
        activity === "" ||
        listCode.length === 0 ||
        isSubmitting ? (
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
