import supabase from "@/utils/supabase/client";

export default async function data_user() {
  const { data: user } = await supabase
    .from("data_user")
    .select()
    .eq("id", 222);

  return <pre>{JSON.stringify(user)}</pre>;
}
