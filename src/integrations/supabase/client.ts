// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://nklyzlsraydlftzfjrod.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5rbHl6bHNyYXlkbGZ0emZqcm9kIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA1MDM1MjksImV4cCI6MjA1NjA3OTUyOX0.03qRpZORtByHV8WV69eDUj_uNPHiOxPOjuHHQySJToo";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);