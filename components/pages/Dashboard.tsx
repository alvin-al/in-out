import Card from "../elements/Card";
import React from "react";

export default async function Dashboard() {
  return (
    <div className='flex p-6 gap-4'>
      {/* <div>
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
      </div> */}
      <Card />
      <Card />
    </div>
  );
}
