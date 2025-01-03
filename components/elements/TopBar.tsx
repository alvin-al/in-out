"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Button from "@mui/material/Button";
import { logout } from "@/app/actions/auth";

const TopBar = () => {
  const [path, setPath] = useState("Dashboard");
  const route = usePathname().toString().replace("/", "");
  useEffect(() => {
    if (route != "") {
      const capitalization = route[0].toUpperCase();
      setPath(capitalization + route.slice(1));
    } else {
      setPath("Dashboard");
    }
  }, [route]);

  return (
    <div className='w-full font-semibold h-16 bg-white text-black px-8 items-center justify-between flex'>
      <div className='text-lg'>{path}</div>
      <div>
        <Button
          className='bg-green-600'
          variant='outlined'
          size='small'
          onClick={() => logout()}
        >
          Log Out
        </Button>
      </div>
    </div>
  );
};

export default TopBar;
