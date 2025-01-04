"use client";
import React, { useState, useRef } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Html5QrcodePlugin from "@/components/elements/Html5QrcodePlugin";
import MyButton from "../elements/MyButton";
import useReadData from "@/hooks/useReadData";
import useCreateData from "@/hooks/useCreateData";
import supabase from "@/utils/supabase/client";

const AddItem = () => {
  const [activity, setActivity] = useState<string | null>("");
  const [pic, setPic] = useState("");
  const [listCode, setListCode] = useState<string[]>([]);
  const cooldownRef = useRef<boolean>(false);
  const { data } = useReadData("users");
  const { createData } = useCreateData("in_out_logs");

  const handleActivity = (
    event: React.MouseEvent<HTMLElement>,
    newActivity: string | null
  ) => {
    if (newActivity !== null) {
      setActivity(newActivity);
    }
  };

  const handleChange = (event: SelectChangeEvent) => {
    setPic(event.target.value as string);
  };

  const onNewScanResult = (decodedText: string) => {
    if (cooldownRef.current) return; // If cooldown is active, don't process the scan

    setListCode((prevList) => [...prevList, decodedText]);

    cooldownRef.current = true; // Set cooldown to true
    setTimeout(() => {
      cooldownRef.current = false; // Reset cooldown after 5 seconds
    }, 4000);
  };

  const handleSubmit = async () => {
    const submitData = {
      activity_type: activity,
      user_id: pic,
      crate_id: listCode,
      timestamp: new Date(Date.now() + 7 * 60 * 60 * 1000).toISOString(),
    };

    try {
      const result = await createData([submitData]);
      console.log(result);

      const updateCrate = listCode.map(async (crateCode) => {
        const status = activity === "in" ? true : false;

        const { data, error } = await supabase
          .from("crate")
          .update({ status: status })
          .match({ crate_code: crateCode });

        console.log(data);
        if (error) {
          throw new Error(
            `Failed to update crate status for ${crateCode}: ${error.message}`
          );
        }
        console.log(`Crate ${crateCode} updated to status: ${status}`);

        await Promise.all(updateCrate);
      });
    } catch (err) {
      console.error("Error inserting data:", err);
    }
  };

  return (
    <div className='p-8 flex flex-col gap-8'>
      {/* Camera scanner */}
      <div className=''>
        <Html5QrcodePlugin
          fps={5}
          qrbox={200}
          disableFlip={false}
          qrCodeSuccessCallback={onNewScanResult}
        />
      </div>
      {/* Daftar kerat */}
      <div className='flex flex-col gap-2  border border-gray-400 '>
        <div className='w-full h-12 text-lg items-center flex font-medium px-4 bg-gray-300'>
          Daftar kerat:
        </div>
        <ul className='px-4'>
          {listCode.map((item, index) => (
            <li key={index}>
              {index + 1}. {item}
            </li>
          ))}
        </ul>
        {listCode.length > 0 ? (
          <div className='self-end h-12 w-full flex items-center justify-between bg-gray-300 px-4'>
            <div>Total kerat = {listCode.length}</div>
            <MyButton
              className='bg-red-500 text-white border-0'
              onClick={() => setListCode([])}
            >
              Ulangi
            </MyButton>
          </div>
        ) : null}
      </div>
      {/* Aktivitas */}
      <div className='flex flex-row gap-4 items-center'>
        <div className='w-16'>Aktivitas</div>
        <div className='text-base'>
          <ToggleButtonGroup
            value={activity}
            exclusive
            onChange={handleActivity}
            aria-label='text alignment'
          >
            <ToggleButton value='out' aria-label='centered'>
              Keluar (Out)
            </ToggleButton>
            <ToggleButton value='in' aria-label='left aligned'>
              Masuk (In)
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
      </div>
      {/* PIC */}
      <div className='flex flex-row gap-4 items-center'>
        <div className='w-16'>Nama PIC</div>
        <div>
          <FormControl sx={{ minWidth: 230 }}>
            <InputLabel id='demo-simple-select-label'>
              Person in Charge
            </InputLabel>
            <Select
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              value={pic}
              label='Person in Charge'
              onChange={handleChange}
            >
              {data?.map((item, index) => (
                <MenuItem key={index} value={item.user_id}>
                  {item.user_name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </div>
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
  );
};

export default AddItem;
