"use client";
import React, { useEffect, useState } from "react";
import supabase from "@/utils/supabase/client";
import { Crate } from "@/types";

const PICWithCrate = () => {
  const [crates, setCrates] = useState<Crate[]>([]);

  // Fetch data from Supabase
  useEffect(() => {
    const fetchCrates = async () => {
      const { data, error } = await supabase
        .from("crate")
        .select("*, user_id:crate_user_id_fkey(user_name)")
        .eq("available", false);

      if (error) console.error("Error fetching crates:", error);
      if (data) setCrates(data);
    };

    fetchCrates();
  }, []);

  return (
    <div className='bg-white p-6 rounded-md shadow-lg h-screen'>
      {crates.length > 0 ? (
        <ul className='space-y-4'>
          {crates.map((crate) => (
            <li
              key={crate.crate_code}
              className='flex items-center justify-between p-4 bg-gray-50 border border-gray-200 rounded-md'
            >
              <div>
                <span className='block text-2xl font-medium text-gray-900'>
                  {crate.crate_code}
                </span>
                <span className='block text-md text-gray-800'>
                  {crate.user_id.user_name}
                </span>
              </div>
              <div>
                <span className='block text-md text-gray-800'>
                  {new Date(crate.last_update).toLocaleDateString("id-ID", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className='text-gray-500'>No crates available.</p>
      )}
    </div>
  );
};

export default PICWithCrate;
