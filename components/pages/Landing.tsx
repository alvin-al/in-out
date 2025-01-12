import React from "react";
import Image from "next/image";
import { Button } from "@mui/material";
import Link from "next/link";

const Landing = () => {
  return (
    <div className='relative w-full h-screen'>
      <div
        className='absolute inset-0 bg-cover bg-center'
        style={{
          backgroundImage: `url('/bg-image.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          opacity: "50%",
        }}
      ></div>
      <div className='absolute inset-0 bg-green-800 opacity-70 w-full '></div>
      <div className='relative z-10 flex pt-16 jutify-center text-white '>
        <div className='flex flex-col items-center w-full gap-20'>
          <div className='w-32 pr-4'>
            <Image src='/logo-white.png' width={108} height={47} alt='logo' />
          </div>
          <div className='flex flex-col items-center gap-4'>
            <div>
              <h1 className='font-bold text-3xl text-center'>
                Mudahkan Pencatatan <br />
                Keluar Masuk Kerat
              </h1>
            </div>
            <div className='w-4/5 lg:w-[500px]'>
              <p className='text-center'>
                Hadir untuk mempermudah pencatatan stok dengan cepat dan akurat.
                Scan QR, kelola stok, dan pantau log harian—semua dalam satu
                genggaman
              </p>
            </div>
          </div>
          <div>
            <Link href='/login'>
              <Button
                sx={{
                  backgroundColor: "white",
                  color: "#15803d",
                  textTransform: "capitalize",
                  fontWeight: 600,
                  paddingX: "32px",
                  fontSize: "0.8rem",
                }}
              >
                Login dengan ID Card
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
