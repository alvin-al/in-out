"use client";
import { useState } from "react";
import Html5QrcodePlugin from "../elements/Html5QrcodePlugin";
import { login } from "@/app/actions/auth";

const LoginPage = () => {
  const [loginMessage, setLoginMessage] = useState<string>("");

  const onNewScanResult = async (decodedText: string) => {
    const code = decodedText;
    const result = await login(Number(code));

    if (result?.user) {
      setLoginMessage(`Selamat datang : ${result.user.nama}`);
    } else {
      setLoginMessage(result?.message ?? "Login failed");
    }
  };

  return (
    <div className='flex flex-col h-screen w-full p-12 gap-8'>
      <div className='h-12'>
        Selamat datang. <br />
        Silahkan login menggunakan kartu ID card
      </div>
      <Html5QrcodePlugin
        fps={60}
        qrbox={200}
        disableFlip={false}
        qrCodeSuccessCallback={onNewScanResult}
      />
      {/* {staffCode && (
        <div className='w-full flex flex-col items-center'>
          <h2 className='text-xl'>Selamat datang</h2>
          <p>ID: {staffCode}</p>
        </div>
      )} */}
      {loginMessage && <p>{loginMessage}</p>}
    </div>
  );
};

export default LoginPage;
