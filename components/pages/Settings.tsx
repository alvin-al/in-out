"use client";
import { MdLogout } from "react-icons/md";
import DashboardCard from "../elements/DashboardCard";
import React from "react";
import { logout } from "@/app/actions/auth";
import { useRouter } from "next/navigation";

const Settings = () => {
  const router = useRouter();

  return (
    <div className='w-full h-full grid grid-cols-2 p-4'>
      <button
        onClick={async () => {
          await logout();
          router.push("/login");
        }}
      >
        <DashboardCard
          title='Log Out'
          icon={<MdLogout size='2em' />}
          className='bg-[#20631e] text-white'
        />
      </button>
    </div>
  );
};

export default Settings;
