import React, { useEffect, useState } from "react";
import supabase from "@/utils/supabase/client";

const useReadData = (table: string) => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase.from(table).select("*");
        if (error) throw error;
        setData(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [table]);

  return { data, loading, error };
};

export default useReadData;
