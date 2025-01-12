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
      setLoginMessage(`✅ Selamat datang, ${result.user?.nama}!`);
      document.cookie = `user_token=${result.user.id}; path=/; max-age=86400`;
      setTimeout(() => {
        window.location.href = "/dashboard";
      }, 1500);
    } else {
      setLoginMessage(result?.message ?? "❌ Login gagal. Coba lagi.");
    }
  };

  return (
    <div className='flex justify-center items-center h-screen w-full'>
      <div className='bg-white rounded-3xl shadow-lg p-8 w-full max-w-md'>
        {/* Header */}
        <h1 className='text-2xl font-bold text-center text-gray-800 mb-6'>
          Login dengan QR Code
        </h1>

        {/* QR Scanner Card */}
        <div className='bg-gray-50 p-4 rounded-2xl shadow-inner mb-6'>
          <Html5QrcodePlugin
            fps={60}
            qrbox={250}
            disableFlip={false}
            qrCodeSuccessCallback={onNewScanResult}
          />
        </div>

        {/* Login Message */}
        <div className='text-center text-gray-700 text-lg font-medium'>
          {loginMessage && (
            <div className='bg-gray-100 p-3 rounded-lg shadow-sm'>
              {loginMessage}
            </div>
          )}
        </div>

        {/* Footer */}
        <p className='text-sm text-center text-gray-500 mt-4'>
          Silakan login dengan kartu ID Card yang terdaftar.
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
