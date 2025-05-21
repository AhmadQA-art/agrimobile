// Essential polyfills for React Native to work with Supabase
import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Import Supabase client - we're using the older v1.35.7 which has better React Native compatibility
import { createClient } from '@supabase/supabase-js';

// Fix for WebSocket-related issues in React Native
// This helps disable problematic features that try to use Node.js modules
const globalAny: any = global;
globalAny.process = globalAny.process || {};
globalAny.process.env = globalAny.process.env || {};
globalAny.process.env.NODE_ENV = process.env.NODE_ENV || 'production';

// Supabase credentials
const supabaseUrl = 'https://jrhbvcjwxvyrxrmgjfbu.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpyaGJ2Y2p3eHZ5cnhybWdqZmJ1Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NzMyNzQwMSwiZXhwIjoyMDYyOTAzNDAxfQ.52GuHUqbL_Z2PJNtLJPD1PZGJ6kj9-o9OL4FhzadnCo';

// Create Supabase client with React Native compatible settings
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  localStorage: AsyncStorage,  // Use AsyncStorage for persisting sessions
  detectSessionInUrl: false,   // Disable session detection in URL (not applicable in React Native)
  // Below options are specific to our React Native optimizations
  autoRefreshToken: true,      // Enable token auto-refresh
  persistSession: true,        // Keep the session between app restarts
  realtime: {
    // Disable realtime subscriptions which cause the WebSocket issues
    params: {
      eventsPerSecond: '0', // Must be a string in v1.35.7
    },
  },
});

