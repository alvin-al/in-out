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
        .order("timestamp", { ascending: false })
        .returns<InOutLogs[]>();
      setData(data);
    };
    fetchData();
  }, []);

  return (
    <div className='p-4 grid gap-4'>
      {/* {data?.map((items, index) => (
        <Link href={`/activity/${items.log_id}`} key={index}>
          <div className='w-full h-fit py-4 items-center flex border-b border-gray-400 px-4'>
            <div className='w-24'>
              {items.activity_type == "in" ? (
                <InOutIcon isIn={true} />
              ) : (
                <InOutIcon isIn={false} />
              )}
            </div>
            <div className='text-left w-full px-4 border-gray-400 border-x'>
              <div className='font-semibold text-2xl mb-1'>
                {items.pic?.user_name}
              </div>
              <div className='text-sm font-medium text-gray-500'>
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
            <div className='w-24 text-center'>
              <div className=' text-3xl font-semibold'>
                {items.crate_id.length}
              </div>
              <div className='text-sm font-medium'>Kerat</div>
            </div>
          </div>
        </Link>
      ))} */}
      {data?.map((items, index) => (
        <Link href={`/activity/${items.log_id}`} key={index}>
          <div
            className={`w-full h-fit py-4 items-center flex px-4 rounded-md ${
              items.activity_type == "in" ? "bg-blue-100" : "bg-red-100"
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
                {items.pic?.user_name}
              </div>
              <div className='text-sm font-medium text-gray-500'>
                <div>
                  {new Date(items.timestamp).toLocaleTimeString("UK", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </div>
                <div>
                  {(() => {
                    const tanggal = new Date(items.timestamp);
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
            <div className='w-24 text-center bg-white p-2 rounded-md'>
              <div className=' text-3xl font-semibold'>
                {items.crate_id.length}
              </div>
              <div className='text-sm font-medium'>Kerat</div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default InOutList;
