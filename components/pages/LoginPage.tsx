"use client";
import React, { useState } from "react";
import { Scanner, IDetectedBarcode } from "@yudiel/react-qr-scanner";

const LoginPage = () => {
  const [value, setValue] = useState<IDetectedBarcode[]>([]);

  const data = value.map((item: IDetectedBarcode) => {
    return item.rawValue;
  });

  return (
    <div className='flex flex-col h-screen w-full p-12 gap-8'>
      <div className='h-12'>
        Selamat datang. <br /> Silahkan login menggunakan kartu ID card
      </div>
      <div className='flex items-center justify-center min-h-[350px]'>
        <div className=''>
          <Scanner onScan={(result) => setValue(result)} />
        </div>
      </div>
      <div>Halo : {data}</div>
    </div>
  );
};

export default LoginPage;
