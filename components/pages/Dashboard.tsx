"use client";
import { Crate } from "@/types";
import React, { useEffect, useState } from "react";
import supabase from "@/utils/supabase/client";
import { FaBoxes } from "react-icons/fa";
import DashboardCard from "../elements/DashboardCard";
import UseCratePIC from "../elements/UseCratePIC";
import {
  HiOutlineArrowLeftOnRectangle,
  HiOutlineArrowLeftStartOnRectangle,
} from "react-icons/hi2";

export default function Dashboard() {
  const [crateData, setCrateData] = useState<Crate[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await supabase.from("crate").select("*");
      setCrateData(data);
      return;
    };
    fetchData();
  }, []);

  console.log(crateData);

  return (
    <div className='p-6 grid grid-cols-2 gap-6'>
      <DashboardCard
        value={crateData?.length}
        uom='Buah'
        title='Total kerat'
        icon={<FaBoxes size='3em' />}
      />
      <DashboardCard
        value={crateData?.filter((crate) => crate.available === true).length}
        title='Kerat tersedia'
        icon={<FaBoxes size='3em' />}
        uom='Buah'
      />
      <div className='col-span-2'>
        <UseCratePIC />
      </div>
      <DashboardCard
        value={crateData?.filter((crate) => crate.available === true).length}
        title='Jumlah In hari ini'
        icon={
          <HiOutlineArrowLeftOnRectangle
            size='3em'
            style={{ transform: "rotate(-90deg)" }}
          />
        }
        uom='Buah'
      />
      <DashboardCard
        value={crateData?.filter((crate) => crate.available === true).length}
        title='Jumlah Out hari ini'
        icon={
          <HiOutlineArrowLeftStartOnRectangle
            size='3em'
            style={{ transform: "rotate(90deg)" }}
          />
        }
        uom='Buah'
      />
    </div>
  );
}
