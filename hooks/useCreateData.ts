import React, { useState } from "react";
import supabase from "@/utils/supabase/client";

const useCreateData = (table: string) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const createData = async (newData: object[]) => {
    try {
      setLoading(true);
      setError(null);

      const { data, error } = await supabase.from(table).insert(newData);

      if (error) {
        console.error("Supabase Error:", error);
        throw error;
      }

      return data;
    } catch (err: any) {
      setError(err.message);
      console.error("Error creating data:", err);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { createData, loading, error };
};

export default useCreateData;
