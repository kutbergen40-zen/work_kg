import { supabase } from "../lib/supabase";

export async function createJob(jobData) {
  const { data, error } =
    await supabase
      .from("jobs")
      .insert([jobData])
      .select();

  return { data, error };
}

export async function getJobs() {
  const { data, error } =
    await supabase
      .from("jobs")
      .select("*")
      .order("created_at", {
        ascending: false,
      });

  return { data, error };
}

export async function getMyJobs(userId) {
  const { data, error } =
    await supabase
      .from("jobs")
      .select("*")
      .eq("user_id", userId);

  return { data, error };
}