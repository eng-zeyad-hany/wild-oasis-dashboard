import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://wwsiczwkzvcppliipstc.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind3c2ljendrenZjcHBsaWlwc3RjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTkyODY5NzksImV4cCI6MjAzNDg2Mjk3OX0.z8VV_eP_EnMxPiZBi4_DWqCvQqjAOpAGtGKauU-NLL8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
