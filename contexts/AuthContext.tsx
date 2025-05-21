import { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import { supabase } from '../lib/supabase';
import { User, Session } from '@supabase/supabase-js';
import { router } from 'expo-router';

// Define types for our context
type AuthContextType = {
  user: User | null;
  session: Session | null;
  loading: boolean;
  signUp: (email: string, password: string, metadata?: any) => Promise<{
    user: User | null;
    error: any | null;
  }>;
  signIn: (email: string, password: string) => Promise<{
    user: User | null;
    session: Session | null;
    error: any | null;
  }>;
  signOut: () => Promise<{ error: any | null }>;
};

// Create the authentication context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Provider component that wraps the app and provides auth context
export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get initial session and set up auth listener
    const session = supabase.auth.session();
    setSession(session);
    setUser(session?.user ?? null);

    // Set up listener for auth state changes
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
        setLoading(false);
      }
    );

    // Set loading to false when initial check is done
    setLoading(false);

    // Clean up subscription
    return () => {
      authListener?.unsubscribe();
    };
  }, []);

  // Sign up function
  const signUp = async (email: string, password: string, metadata?: any) => {
    setLoading(true);
    try {
      // In v1.35.7, we need to match the API signature correctly
      // Cast as any to avoid TypeScript errors with the different versions
      const { user, error } = await (supabase.auth as any).signUp(email, password, metadata);
      return { user, error };
    } catch (error) {
      console.error('Error signing up:', error);
      return { user: null, error };
    } finally {
      setLoading(false);
    }
  };

  // Sign in function
  const signIn = async (email: string, password: string) => {
    setLoading(true);
    try {
      // For v1.35.7 we use signIn instead of signInWithPassword
      const { user, session, error } = await supabase.auth.signIn({ email, password });
      return { user, session, error };
    } catch (error) {
      console.error('Error signing in:', error);
      return { user: null, session: null, error };
    } finally {
      setLoading(false);
    }
  };

  // Sign out function
  const signOut = async () => {
    setLoading(true);
    try {
      const { error } = await supabase.auth.signOut();
      if (!error) {
        router.replace('/login');
      }
      return { error };
    } catch (error) {
      console.error('Error signing out:', error);
      return { error };
    } finally {
      setLoading(false);
    }
  };

  // Value to be provided through the context
  const value = {
    user,
    session,
    loading,
    signUp,
    signIn,
    signOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// Custom hook to use the auth context
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
