import { Card } from "@mui/material";
import React from "react";

export default async function Dashboard() {
  return (
    <div className='divide-x divide-y grid '>
      {/* {listMenuDashboard.map((items, index) => (
        <Link key={index} href={items.link}>
          <div className='w-1/4 h-20 text-center'>{items.nama}</div>
        </Link>
      ))} */}
      <div>
        <div>Jumlah kerat:</div>
        <div>50 Buah</div>
      </div>
      <div>
        <div>Kerat tersedia:</div>
        <div>30 Buah</div>
      </div>
      <div>
        <div>Kerat keluar:</div>
        <div>20 Buah</div>
      </div>
      <Card />
    </div>
  );
}
