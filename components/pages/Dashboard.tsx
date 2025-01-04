"use client";
import React, { useEffect, useState } from "react";
import supabase from "@/utils/supabase/client";
import { Users } from "@/types";

const Dashboard = () => {
  const [data, setData] = useState<Users[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await supabase.from("users").select().returns<Users[]>();
      setData(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      {data?.map((items, index) => (
        <div key={index}>Nama: {items.user_name}</div>
      ))}
    </div>
  );
};

export default Dashboard;
