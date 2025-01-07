"use client";
import React, { useMemo } from "react";
import { usePathname, useRouter } from "next/navigation";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MyButton from "./MyButton";

const TopBar = () => {
  const router = useRouter();
  const route = usePathname().toString().replace("/", "");

  const path = useMemo(() => {
    return route
      ? route.replace(/^./, (str) => str.toLocaleUpperCase())
      : "Dashboard";
  }, [route]);

  const backButton = useMemo(() => {
    const mainPages = ["dashboard", "activity", "settings"];
    return !mainPages.includes(route);
  }, [route]);

  return (
    <div className='w-full font-semibold h-16 bg-[#86A788] text-white flex items-center px-8 sticky top-0 z-10 shadow-md'>
      <div className='w-1/3'>
        {backButton && (
          <MyButton onClick={() => router.back()}>
            <ArrowBackIcon />
          </MyButton>
        )}
      </div>
      <div className='text-lg w-1/3 text-center'>{path.replace("-", " ")}</div>
      <div className='w-1/3 flex justify-end text-sm'></div>
    </div>
  );
};

export default TopBar;
