import { setCookie } from "nookies";
import { createContext, useState, } from "react";
import { useRouter } from "next/dist/client/router";
import {
  signInRequest,
  signUpRequest,
} from "../services/auth";

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  
  const router = useRouter();

  const isAuthenticated = !!user;

  

  async function signUp({ username, password }) {
    await signUpRequest({ username, password });
    router.push("/");
  }

  async function signIn({ username, password }) {
    const { token, user } = await signInRequest({
      username,
      password,
    });
    setCookie(undefined, "@token/text-style", token, {
      maxAge: 60 * 60 * 1,
    });
    setUser(user);
    router.push("/view");
  }

  // async function recover(data) {
  //   await recoverRequest(data)
  // }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn, signUp }}>
      {children}
    </AuthContext.Provider>
  );
}
