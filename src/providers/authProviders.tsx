"use client";

import { createContext, useContext, useEffect, useState } from "react";
import {
  useRouter,
  redirect,
  usePathname,
  useSearchParams,
} from "next/navigation";
import useSWR from "swr";
import { TOKEN_API_URL } from "@/constants";

const LOGIN_REDIRECT_URL = "/";
const LOGOUT_REDIRECT_URL = "/login";
const LOGIN_REQUIRED_URL = "/login";

const LOCAL_STORAGE_KEY = "is-logged-in";

interface AuthContextType {
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  login: () => void;
  logout: () => void;

  loginRequiredRedirect: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Check authentication status on mount and when token changes
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch(TOKEN_API_URL);
        const data = await response.json();
        const isAuthed = !!data?.token;
        setIsAuthenticated(isAuthed);
        localStorage.setItem(LOCAL_STORAGE_KEY, isAuthed ? "1" : "0");
      } catch (error) {
        setIsAuthenticated(false);
        localStorage.setItem(LOCAL_STORAGE_KEY, "0");
      }
    };
    
    checkAuth();
  }, []);

  const login = () => {
    setIsAuthenticated(true);
    localStorage.setItem(LOCAL_STORAGE_KEY, "1");
    
    const nextUrl = searchParams.get("next");
    const invalidNextUrl = ["/login", "/logout"];
    const nextUrlValid =
      nextUrl && nextUrl.startsWith("/") && !invalidNextUrl.includes(nextUrl);
      
    window.location.replace(nextUrlValid ? nextUrl : LOGIN_REDIRECT_URL);
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.setItem(LOCAL_STORAGE_KEY, "0");
    // router.replace(LOGOUT_REDIRECT_URL);
    window.location.replace(LOGOUT_REDIRECT_URL);
  };

  const loginRequiredRedirect = () => {
    // user is not logged in via API
    setIsAuthenticated(false);
    localStorage.setItem(LOCAL_STORAGE_KEY, "0");
    let loginWithNextUrl = `${LOGIN_REQUIRED_URL}?next=${pathname}`;
    if (loginWithNextUrl === pathname) {
      loginWithNextUrl = `${LOGIN_REQUIRED_URL}`;
    }
    router.push(loginWithNextUrl);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        login,
        logout,
        loginRequiredRedirect,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
