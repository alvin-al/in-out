"use client";
import { useRouter } from "next/navigation";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MyButton from "./MyButton";

const TopBar = ({ title }: { title: string }) => {
  const router = useRouter();

  return (
    <div className='w-full font-semibold h-16 bg-[#20631e] text-white flex items-center px-4 sticky top-0 z-10 shadow-md'>
      <div className='w-1/6  '>
        <MyButton onClick={() => router.back()}>
          <ArrowBackIcon />
        </MyButton>
      </div>
      <div className='text-lg w-4/6 text-center'>{title}</div>
      <div className='w-1/6 flex justify-end text-sm'></div>
    </div>
  );
};

export default TopBar;
