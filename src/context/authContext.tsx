/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut} from "firebase/auth";
import {auth} from "../Firebase/Firebase"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AuthContext = createContext<any>(null);
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("There is no auth provider");
  }
  return context;
};
function AuthProvider({ children }: {children: React.ReactNode}) {
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   const [user, setUser] = useState<any>(null);
   const [loading, setLoading] = useState<boolean>(true);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const signup = (email: any, password: any) => {
      return createUserWithEmailAndPassword(auth, email, password);
    }

    const login = (email: string, password: string) => {
      return signInWithEmailAndPassword(auth, email, password);
    }

    const logout = () => {
      signOut(auth);
    }

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, currentUser => {
        setUser(currentUser)
        setLoading(false)
      })
      return () => {
        unsubscribe()
      }
    }, [])
    
    return (
      <AuthContext.Provider
        value={{
          signup: signup,
          login: login,
          user: user,
          logout: logout,
          loading: loading
        }}
      >
        {children}
      </AuthContext.Provider>
    );
}

export default AuthProvider