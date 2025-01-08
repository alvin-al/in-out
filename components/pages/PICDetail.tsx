"use client";
import { InOutLogs } from "@/types";
import supabase from "@/utils/supabase/client";
import React, { useState, useEffect } from "react";
import InOutIcon from "../elements/InOutIcon";
import TopBar from "../elements/TopBar";

const PICDetail = ({ id }: { id: string }) => {
  const [data, setData] = useState<InOutLogs[] | null>([]);
  const [formattedDate, setFormattedDate] = useState<{
    date: string;
    time: string;
  }>({
    date: "",
    time: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await supabase
        .from("in_out_logs")
        .select("*,pic:in_out_logs_pic_fkey(user_name)")
        .eq("log_id", id);

      setData(data);

      if (data && data.length > 0) {
        const timestamp = data[0].timestamp;
        const dateObj = new Date(timestamp);

        const formattedDate = dateObj.toLocaleDateString("id-ID", {
          day: "2-digit",
          month: "long",
          year: "numeric",
        });

        const formattedTime = dateObj.toLocaleTimeString("id-ID", {
          hour: "2-digit",
          minute: "2-digit",
        });

        // Set hasil ke state
        setFormattedDate({ date: formattedDate, time: formattedTime });
      }
    };

    fetchData();
  }, [id]);

  return (
    <div>
      <TopBar title={`Detail Kerat ${data?.[0]?.pic?.user_name ?? ""}`} />
      <div className='p-4 grid grid-cols-2 gap-4'>
        <div className='bg-yellow-200  p-4 rounded-md flex justify-between flex-col'>
          <div className=''>
            <InOutIcon isIn={false} />
          </div>
          <div className='text-3xl font-semibold mt-2'>Diki</div>
        </div>
        <div className='bg-yellow-200 p-4 rounded-md flex gap-2 justify-between flex-col'>
          <div className='text-xs font-medium leading-relaxed'>
            <div>{formattedDate.time} WIB</div>
            <div>{formattedDate.date}</div>
            <div>By : Alvin</div>
          </div>
          <div className='text-3xl font-semibold'>3 Kerat</div>{" "}
        </div>{" "}
        <div className=' col-span-2'>
          <ul className='grid gap-4'>
            {data?.[0]?.crate_id.map((item, index) => (
              <li key={index}>
                <div className='bg-yellow-200 flex rounded-md col-span-2 items-center gap-4'>
                  <div className='w-16 min-h-12 bg-slate-200 rounded-l-md flex justify-center items-center text-xl'>
                    {index + 1}
                  </div>
                  <div className='text-xl'>{item}</div>
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
