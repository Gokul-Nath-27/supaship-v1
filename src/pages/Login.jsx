import React from "react";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useNavigate } from "react-router-dom";
import supabase from "../config/client";
import '../styles/login.css'
const Login = () => {
  const navigate = useNavigate();

  supabase.auth.onAuthStateChange(async (event) => {
    if (event !== "SIGNED_OUT") {
      navigate("/home");
    } else {
      navigate("/");
    }
  });

  return (
    <div className="login">
      <Auth
        supabaseClient={supabase}
        appearance={{ theme: ThemeSupa }}
        providers={["google", "discord"]}
        theme="dark"
      />
    </div>
  );
};

export default Login;
