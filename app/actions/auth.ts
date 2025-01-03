import supabase from "@/utils/supabase/client";

export async function login(staffCode: number) {
  const { data, error } = await supabase
    .from("data_user")
    .select("*")
    .eq("id", staffCode);

  // Jika tidak ada data ditemukan
  if (!data || data.length === 0 || error) {
    return {
      message: "ID card anda tidak valid.",
    };
  }

  // Jika data ditemukan
  const user = data[0];

  return {
    message: "Login berhasil.",
    user,
  };
}
