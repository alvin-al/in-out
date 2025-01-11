"use client";
import { InOutLogs } from "@/types";
import supabase from "@/utils/supabase/client";
import React, { useState, useEffect } from "react";
import InOutIcon from "../elements/InOutIcon";
import TopBar from "../elements/TopBar";

const PICDetail = ({ id }: { id: string }) => {
  const [data, setData] = useState<InOutLogs[] | null>([]);
  const [crate, setCrate] = useState<InOutLogs[] | null>([]);
  const [formattedTime, setFormattedTime] = useState<string>();
  const [formattedDate, setFormattedDate] = useState<string>();

  useEffect(() => {
    const fetchData = async () => {
      const [{ data }, { data: crate }] = await Promise.all([
        supabase.rpc("get_batch_summary").eq("batches", id),
        supabase.from("in_out_logs").select("*").eq("batches", id),
      ]);

      if (data !== null) {
        setData(data);
        setCrate(crate);
      }
    };
    const time = data?.[0]?.log_time;
    const dateObj = time ? new Date(time) : new Date();

    // Format waktu ke jam dan menit
    const formattedTime = dateObj.toLocaleTimeString("id-ID", {
      hour: "2-digit",
      minute: "2-digit",
    });

    const formattedDate = dateObj.toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

    setFormattedTime(formattedTime);
    setFormattedDate(formattedDate);

    fetchData();
  }, [id, data]);
  console.log("data crate", crate);

  return (
    <div>
      <TopBar title={`Detail Kerat ${data?.[0]?.pic_name}`} />
      <div className='p-4 grid grid-cols-2 gap-4'>
        <div className='bg-slate-100 p-4 rounded-md flex justify-between flex-col'>
          <div className=''>
            {" "}
            {data?.[0]?.activity_type == "in" ? (
              <InOutIcon isIn={true} />
            ) : (
              <InOutIcon isIn={false} />
            )}
          </div>
          <div className='text-3xl font-semibold mt-2'>
            {data?.[0]?.pic_name}
          </div>
        </div>
        <div className='bg-slate-100 p-4 rounded-md flex gap-2 justify-between flex-col'>
          <div className='text-xs font-medium leading-relaxed'>
            <div>{formattedTime} WIB</div>
            <div>{formattedDate}</div>
            <div>By : {data?.[0]?.operator_name}</div>
          </div>
          <div className='text-3xl font-semibold'>{crate?.length} Kerat</div>{" "}
        </div>{" "}
        <div className=' col-span-2'>
          <ul className='overflow-hidden rounded-md divide-y'>
            {crate?.map((item, index) => (
              <li key={index}>
                <div className='bg-[#20631e] text-white flex col-span-2 items-center gap-4'>
                  <div className='w-16 min-h-12 flex bg-green-700 justify-center items-center text-md'>
                    {index + 1}
                  </div>
                  <div className='text-md'>{item.crate_id}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PICDetail;
