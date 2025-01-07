"use client";
import TopBar from "@/components/elements/TopBar";
import BottomBar from "@/components/elements/BottomBar";
import { usePathname } from "next/navigation";

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  if (pathname === "/login") {
    return <>{children}</>;
  }

  return (
    <div>
      <TopBar />
      <div className='pb-16'>{children}</div>
      
      <BottomBar />
    </div>
  );
};

export default LayoutWrapper;
