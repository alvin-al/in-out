"use client";
import { InOutLogs } from "@/types";
import supabase from "@/utils/supabase/client";
import React, { useState, useEffect } from "react";
import InOutIcon from "../elements/InOutIcon";
import TopBar from "../elements/TopBar";

const PICDetail = ({ id }: { id: string }) => {
  const [data, setData] = useState<InOutLogs[] | null>([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await supabase
        .from("in_out_logs")
        .select("*,pic:in_out_logs_pic_fkey(user_name)")
        .eq("log_id", id);
      setData(data);
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
            <div>03:00 WIB</div>
            <div>07 Januari 2025</div>
            <div>By : Alvin</div>
          </div>
          <div className='text-3xl font-semibold'>3 Kerat</div>{" "}
        </div>{" "}
        <div className='bg-yellow-200 flex rounded-md col-span-2 items-center gap-4'>
          <div className='w-16 min-h-12 bg-slate-200 rounded-l-md flex justify-center items-center text-xl'>
            1
          </div>
          <div className='text-xl'>BK1</div>
        </div>
        <div className='bg-yellow-200 flex rounded-md col-span-2 items-center gap-4'>
          <div className='w-16 min-h-12 bg-slate-200 rounded-l-md flex justify-center items-center text-xl'>
            2
          </div>
          <div className='text-xl'>BK1</div>
        </div>
        <div className='bg-yellow-200 flex rounded-md col-span-2 items-center gap-4'>
          <div className='w-16 min-h-12 bg-slate-200 rounded-l-md flex justify-center items-center text-xl'>
            3
          </div>
          <div className='text-xl'>BK1</div>
        </div>
        {/* {data?.map((item) => (
        <div key={item.log_id}>
          <div>Nama : {item.pic?.user_name}</div>
        </div>
      ))} */}
      </div>
    </div>
  );
};

export default PICDetail;
