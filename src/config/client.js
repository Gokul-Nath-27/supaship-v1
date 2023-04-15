import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_APP_SUPABASE_URL;
const publicKey = import.meta.env.VITE_APP_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, publicKey);

export default supabase;
