"use client";
import React from "react";
import { useRouter } from "next/navigation";

const Confirmation = () => {
  const router = useRouter();

  // Redirect setelah 2 detik
  setTimeout(() => {
    router.push("/dashboard");
  }, 2000);

  return (
    <div className='h-screen flex items-center justify-center bg-gray-100 px-8'>
      <div className='bg-white shadow-lg rounded-xl p-8 flex flex-col items-center gap-4 text-center'>
        {/* Spinner */}
        <div className='w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin'></div>

        {/* Heading */}
        <h1 className='text-xl font-bold text-gray-800'>
          Data sedang disubmit...
        </h1>
        <p className='text-sm text-gray-500'>
          Harap menunggu sebentar, Anda akan segera diarahkan.
        </p>
      </div>
    </div>
  );
};

export default Confirmation;
