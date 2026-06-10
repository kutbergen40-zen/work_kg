import {
  createContext,
  useEffect,
  useState,
} from "react";

import { supabase } from "../lib/supabase";

export const AuthContext =
  createContext();

export function AuthProvider({
  children,
}) {
  const [user, setUser] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  // Получить пользователя
  async function refreshUser() {
    const {
      data: { user },
    } =
      await supabase.auth.getUser();

    setUser(user);
  }

  // Выход
  async function logout() {
    await supabase.auth.signOut();

    setUser(null);
  }

  useEffect(() => {
    async function init() {
      await refreshUser();

      setLoading(false);
    }

    init();

    const {
      data: { subscription },
    } =
      supabase.auth.onAuthStateChange(
        async (
          _event,
          session
        ) => {
          setUser(
            session?.user ||
              null
          );
        }
      );

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        refreshUser,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}