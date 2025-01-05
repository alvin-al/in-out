"use client";
import { InOutLogs } from "@/types";
import React, { useState, useEffect } from "react";
import supabase from "@/utils/supabase/client";
import InOutIcon from "./InOutIcon";
import Link from "next/link";

const InOutList = () => {
  const [data, setData] = useState<InOutLogs[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await supabase
        .from("in_out_logs")
        .select(
          "*, pic:in_out_logs_pic_fkey(user_name),operator:in_out_logs_operator_fkey(user_name)"
        )
        .returns<InOutLogs[]>();
      setData(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      {data?.map((items, index) => (
        <Link href='/' key={index}>
          <div className='w-full h-fit py-2 items-center flex divide-x border-b  px-4'>
            <div className='w-20'>
              {items.activity_type == "in" ? (
                <InOutIcon isIn={true} />
              ) : (
                <InOutIcon isIn={false} />
              )}
            </div>
            <div className='text-left w-full px-4'>
              <div className='font-semibold text-xl'>
                {items.pic?.user_name}
              </div>
              <div className='text-xs text-gray-500'>
                <div>
                  {(() => {
                    const tanggal = new Date(items.timestamp);
                    // Format tanggal dengan toLocaleDateString
                    const tanggalFormatted = tanggal.toLocaleDateString(
                      "id-ID",
                      {
                        weekday: "long", // Menampilkan nama hari
                        day: "2-digit", // Menampilkan tanggal dengan 2 digit
                        month: "long", // Menampilkan nama bulan
                        year: "numeric", // Menampilkan tahun
                      }
                    );
                    return `${tanggalFormatted}`;
                  })()}
                </div>
                <div>By: {items.operator?.user_name}</div>
              </div>
            </div>
            <div className='w-20 text-center'>
              <div className='text-2xl'>{items.crate_id.length}</div>
              <div className='text-sm'>Kerat</div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default InOutList;
