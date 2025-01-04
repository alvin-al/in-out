"use client";
import Link from "next/link";
import React from "react";
import { IoMdPersonAdd } from "react-icons/io";
import MyButton from "../elements/MyButton";
import { logout } from "@/app/actions/auth";
import { useRouter } from "next/navigation";

const Settings = () => {
  const router = useRouter();

  const settingList = [
    { name: "Tambah Akun", icon: "aa", link: "/" },
    { name: "Tambah Supplier", icon: <IoMdPersonAdd />, link: "/" },
    { name: "Tambah Kerat", icon: "ag", link: "/" },
  ];

  return (
    <div className='w-full h-full flex flex-col items-center gap-10'>
      <div className='w-full grid grid-cols-3 gap-0 divide-x divide-y '>
        {settingList.map((item, index) => (
          <Link key={index} href={item.link}>
            <div className='text-sm h-32 flex flex-col items-center justify-center'>
              <div className='text-5xl'>{item.icon}</div>
              <div className='mt-2'>{item.name}</div>
            </div>
          </Link>
        ))}
      </div>
      <div>
        <MyButton
          onClick={async () => {
            await logout();
            router.push("/login");
          }}
        >
          Log Out
        </MyButton>
      </div>
    </div>
  );
};

export default Settings;
