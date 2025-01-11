import React, { useEffect, useState } from "react";
import Link from "next/link";
import { IoPeople } from "react-icons/io5";
import { Crate, Users } from "@/types";
import supabase from "@/utils/supabase/client";

const UseCratePIC = () => {
  const [data, setData] = useState<((Crate & { user_id: Users }) | null)[]>([]);
  const [pic, setPic] = useState<{ user_name: string; count_id: number }[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const [{ data }, { data: userData }] = await Promise.all([
        supabase
          .from("crate")
          .select("*, user_id:crate_user_id_fkey(user_name)")
          .eq("available", false),
        supabase.rpc("get_user_count"),
      ]);

      if (userData !== null && data !== null) {
        setData(data);
        setPic(userData);
      }
    };

    fetchData();
  }, []);

  console.log(data);

  return (
    <Link href='/'>
      <div
        className={`h-fit bg-gray-300 text-gray-700 rounded-xl flex p-4 flex-wrap gap-5 flex-col`}
      >
        <div className='flex items-center justify-between'>
          <div className='flex gap-4 w-1/2'>
            <div className=''>
              <IoPeople size='3em' />
            </div>
            <div className='text-xl font-medium'>PIC yang Membawa Kerat</div>
          </div>
          <div>
            <div className='text-6xl font-semibold flex'>
              {pic?.length || 0}
              <span className='self-end mb-1 ml-2 text-lg'>Orang</span>
            </div>
          </div>
        </div>
        <div>
          <ul className='flex flex-col gap-2'>
            {pic.map((item, index) => {
              return (
                <li
                  key={index}
                  className='text-2xl w-full flex justify-between'
                >
                  <div className='font-semibold'>{item.user_name}</div>
                  <div>{item.count_id} Kerat</div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Link>
  );
};

export default UseCratePIC;
