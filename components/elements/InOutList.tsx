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
            className={`w-full h-fit py-4 flex px-4 rounded-lg ${
              items.activity_type === "in"
                ? " border border-gray-300 bg-gray-100"
                : " border border-gray-300 bg-gray-100"
            }`}
          >
            {/* Icon Section */}
            <div className='w-20 flex justify-center items-center'>
              {items.activity_type === "in" ? (
                <InOutIcon isIn={true} />
              ) : (
                <InOutIcon isIn={false} />
              )}
            </div>

            {/* Content Section */}
            <div className='text-left w-full px-4'>
              <div className='font-semibold text-xl text-gray-800 mb-1'>
                {items?.pic_name}
              </div>
              <div className='text-sm text-gray-600'>
                <div>
                  {new Date(
                    new Date(items.log_time).getTime() - 7 * 60 * 60 * 1000
                  ).toLocaleTimeString("id", {
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
                        weekday: "long",
                        day: "2-digit",
                        month: "long",
                        year: "numeric",
                      }
                    );
                    return `${tanggalFormatted}`;
                  })()}
                </div>
                <div>By: {items.operator_name}</div>
              </div>
            </div>

            {/* Crate Count Section */}
            <div
              className={`w-20 flex flex-col items-center justify-center text-white rounded-lg ${
                items.activity_type === "in" ? "bg-green-600" : "bg-red-600"
              }`}
            >
              <div className='text-3xl font-semibold'>{items.total_crate}</div>
              <div className='text-sm font-medium'>Kerat</div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default InOutList;
