"use client";
import { InOutLogs } from "@/types";
import supabase from "@/utils/supabase/client";
import React, { useState, useEffect } from "react";
import InOutIcon from "../elements/InOutIcon";

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

  console.log(data);

  return (
    <div className='p-4 grid grid-cols-2 gap-4'>
      <div className='bg-yellow-200  p-4 rounded-md flex justify-between flex-col'>
        <div className=''>
          <InOutIcon isIn={false} />
        </div>
        <div className='text-3xl font-semibold mt-2'>Diki</div>
      </div>
      <div className='bg-yellow-200  p-4 rounded-md flex gap-2  flex-col'>
        <div className='text-3xl font-semibold'>3 Kerat</div>{" "}
        <div className='text-sm'>
          <div>07 Januari 2025</div>
          <div>By : Usep</div>
        </div>
      </div>

      {/* {data?.map((item) => (
        <div key={item.log_id}>
          <div>Nama : {item.pic?.user_name}</div>
        </div>
      ))} */}
    </div>
  );
};

export default PICDetail;
