"use client";
import BottomBar from "@/components/elements/BottomBar";
import { usePathname } from "next/navigation";

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  if (pathname === "/login") {
    return <>{children}</>;
  }

  return (
    <div >
      <div className='pb-16 lg:w-[600px]'>{children}</div>
      <BottomBar />
    </div>
  );
};

export default LayoutWrapper;
