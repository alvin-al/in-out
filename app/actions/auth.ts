import supabase from "@/utils/supabase/client";

export async function login(staffCode: number) {
  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("user_id", staffCode);

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
    user: {
      nama: user.user_name,
      id: user.user_id,
    },
  };
}

export async function logout() {
  document.cookie =
    "user_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

  window.location.href = "/login";
}
