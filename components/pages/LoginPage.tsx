"use client";
import { useState } from "react";
import Html5QrcodePlugin from "../elements/Html5QrcodePlugin";

const LoginPage = () => {
  const [scannedText, setScannedText] = useState("");

  const handleScanSuccess = (decodedText: string, decodedResult: string) => {
    setScannedText(decodedText); // Simpan hasil pemindaian ke state
    console.log("Scan success:", decodedText);
    console.log(decodedResult);
  };

  return (
    <div className='flex flex-col h-screen w-full p-12 gap-8'>
      <div className='h-12'>
        Selamat datang. <br />
        Silahkan login menggunakan kartu ID card
      </div>

      <Html5QrcodePlugin onScanSuccess={handleScanSuccess} />

      <div>
        {scannedText ? (
          <>
            <h2>Hasil Scan:</h2>
            <p>{scannedText}</p>
          </>
        ) : (
          <p>Belum ada hasil scan.</p>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
