import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  "https://cjyyledfjlxhxbmuvwbs.supabase.co";

const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNqeXlsZWRmamx4aHhibXV2d2JzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA4OTU4MTUsImV4cCI6MjA5NjQ3MTgxNX0.y8pWoLnvQ6pBNn-En77IgW3iVWtIm-8OG8fTGiJpVTI";

export const supabase =
  createClient(
    supabaseUrl,
    supabaseAnonKey
  );