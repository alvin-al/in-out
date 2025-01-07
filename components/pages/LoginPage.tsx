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
      setLoginMessage(`Selamat datang : ${result.user?.nama}`);
      document.cookie = `user_token=${result.user.id}; path=/; max-age=86400`;
      setTimeout(() => {
        window.location.href = "/dashboard";
      }, 1500);
    } else {
      setLoginMessage(result?.message ?? "Login failed");
    }
  };

  return (
    <div className='flex flex-col h-screen w-full p-12 gap-8 md:w-96  self-center'>
      <div className='h-12 text-center font-semibold'>
        Silahkan login menggunakan <br /> kartu ID card
      </div>
      <Html5QrcodePlugin
        fps={60}
        qrbox={200}
        disableFlip={false}
        qrCodeSuccessCallback={onNewScanResult}
      />
      <div className='w-full flex text-lg justify-center'>
        {loginMessage && <div>{loginMessage}</div>}
      </div>
    </div>
  );
};

export default LoginPage;
