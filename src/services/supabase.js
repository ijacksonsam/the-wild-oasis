import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://phibfwbyvbnlkcjqbuyr.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBoaWJmd2J5dmJubGtjanFidXlyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkwNzY2NDQsImV4cCI6MjAxNDY1MjY0NH0.54Av2RbYIqhkLgn0F8j5UBE0pjZm-SScmD5mbulWqog";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
