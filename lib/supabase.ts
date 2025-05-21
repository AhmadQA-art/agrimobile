import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://jrhbvcjwxvyrxrmgjfbu.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpyaGJ2Y2p3eHZ5cnhybWdqZmJ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDczMjc0MDEsImV4cCI6MjA2MjkwMzQwMX0.52GuHUqbL_Z2PJNtLJPD1PZGJ6kj9-o9OL4FhzadnCo';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
