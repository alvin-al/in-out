"use client";
import { useState } from "react";
import Html5QrcodePlugin from "../elements/Html5QrcodePlugin";

const LoginPage = () => {
  const [data, setData] = useState(""); // Changed to empty string since we're storing text

  const onNewScanResult = (decodedText: string, decodedResult: string) => {
    // Use decodedText which contains the actual QR code content
    setData(decodedText);

    // Optional: If you need the full result object, you can console.log it
    console.log("Full result:", decodedResult);
  };

  return (
    <div className='flex flex-col h-screen w-full p-12 gap-8'>
      <div className='h-12'>
        Selamat datang. <br />
        Silahkan login menggunakan kartu ID card
      </div>

      <Html5QrcodePlugin
        fps={10}
        qrbox={250}
        disableFlip={false}
        qrCodeSuccessCallback={onNewScanResult}
      />

      <div>Halo : {data}</div>
    </div>
  );
};

export default LoginPage;
