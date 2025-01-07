"use client";
import { Crate, InOutLogs } from "@/types";
import React, { useEffect, useState } from "react";
import supabase from "@/utils/supabase/client";
import { FaBoxes } from "react-icons/fa";
import DashboardCard from "../elements/DashboardCard";
import UseCratePIC from "../elements/UseCratePIC";
import {
  HiOutlineArrowLeftOnRectangle,
  HiOutlineArrowLeftStartOnRectangle,
} from "react-icons/hi2";
import { getCookie } from "cookies-next";
import AddItemButton from "../elements/AddItemButton";

export default function Dashboard() {
  const [crateData, setCrateData] = useState<Crate[] | null>(null);
  const [inOutData, setInOutData] = useState<InOutLogs[] | null>(null);
  const [userName, setUserName] = useState<{ user_name: string }[] | null>(
    null
  );

  useEffect(() => {
    const userId = getCookie("user_token") as unknown as number | null;
    const fetchData = async () => {
      const [crateData, inOutData, userName] = await Promise.all([
        supabase.from("crate").select("*"),
        supabase.from("in_out_logs").select("*"),
        supabase.from("users").select("user_name").eq("user_id", userId),
      ]);
      setCrateData(crateData.data);
      setInOutData(inOutData.data);
      setUserName(userName.data);
      return;
    };

    fetchData();
  }, []);

  return (
    <div className='p-4'>
      <AddItemButton />
      <div className='w-full h-48 px-8 py-4 text-4xl leading-normal font-semibold text-gray-800 rounded-md bg-slate-100 mb-4 shadow-sm'>
        Selamat Datang,
        <br /> {userName?.[0]?.user_name}
      </div>
      <div className=' grid grid-cols-2 gap-4'>
        <DashboardCard
          value={crateData?.length}
          uom='Buah'
          title='Total kerat'
          icon={<FaBoxes size='2em' />}
          className='bg-gray-300 text-gray-700'
        />
        <DashboardCard
          value={crateData?.filter((crate) => crate.available === true).length}
          title='Kerat tersedia'
          icon={<FaBoxes size='2em' />}
          uom='Buah'
          className='bg-gray-300 text-gray-700'
        />
        <DashboardCard
          value={
            inOutData?.filter(
              (crate_id) =>
                crate_id.activity_type === "in" &&
                new Date(crate_id.timestamp).toDateString() ===
                  new Date().toDateString()
            ).length
          }
          title='Jumlah In hari ini'
          icon={
            <HiOutlineArrowLeftOnRectangle
              size='2em'
              style={{ transform: "rotate(-90deg)" }}
            />
          }
          uom='Buah'
          className='bg-[#8EB486] text-white'
        />
        <DashboardCard
          value={
            inOutData?.filter(
              (crate_id) =>
                crate_id.activity_type === "out" &&
                new Date(crate_id.timestamp).toDateString() ===
                  new Date().toDateString()
            ).length
          }
          title='Jumlah Out hari ini'
          icon={
            <HiOutlineArrowLeftStartOnRectangle
              size='2em'
              style={{ transform: "rotate(90deg)" }}
            />
          }
          uom='Buah'
          className='bg-[#FF748B] text-white'
        />
        <div className='col-span-2'>
          <UseCratePIC />
        </div>
      </div>
    </div>
  );
}
