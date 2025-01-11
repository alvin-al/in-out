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
      const { data } = await supabase.rpc("get_batch_summary");
      if (data) {
        setData(data);
      }
    };

    fetchData();
  }, []);

  console.log(data);

  return (
    <div className='p-4 grid gap-4'>
      {data?.map((items, index) => (
        <Link href={`/activity/${items.batches}`} key={index}>
          <div
            className={`w-full h-fit py-4 items-center flex px-4 rounded-xl shadow-md ${
              items.activity_type == "in" ? "" : "bg-orange-100"
            }`}
          >
            <div className='w-24'>
              {items.activity_type == "in" ? (
                <InOutIcon isIn={true} />
              ) : (
                <InOutIcon isIn={false} />
              )}
            </div>
            <div className='text-left w-full  border-gray-400 '>
              <div className='font-semibold text-2xl mb-1'>
                {items?.pic_name}
              </div>
              <div className='text-sm font-medium text-gray-800'>
                <div>
                  {new Date(items.log_time).toLocaleTimeString("UK", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </div>
                <div>
                  {(() => {
                    const tanggal = new Date(items.log_time);
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
                <div>By: {items.operator_name}</div>
              </div>
            </div>
            <div
              className={`w-24 text-center text-gray-900 p-2 rounded-xl ${
                items.activity_type == "in" ? "" : ""
              }`}
            >
              <div className=' text-3xl font-semibold'>{items.total_crate}</div>
              <div className='text-sm font-medium'>Kerat</div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default InOutList;
