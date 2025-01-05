import supabase from "@/utils/supabase/client";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const { data, error } = await supabase.from("users").select("*");

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Internal server error",
      },
      { status: 500 }
    );
  }
}
