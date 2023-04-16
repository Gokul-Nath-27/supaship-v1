import { createContext, useState, useEffect } from "react";
import supabase from "../config/client";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const getUserData = async () => {
      try {
        await supabase.auth.getUser().then((response) => {
          console.log(response.data?.user);
          setUser(response.data?.user);
        });
      } catch (err) {
        alert(err);
      }
    };
    getUserData();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext