import { createClient } from "@/utils/supabase/server";

export default async function data_user() {
  const supabase = await createClient();
  const { data: user } = await supabase.from("data_user").select();

  return <pre>{JSON.stringify(user)}</pre>;
}
