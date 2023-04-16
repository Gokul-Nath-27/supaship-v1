import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/home.css";
import supabase from "../config/client";

const Home = () => {
  const navigate = useNavigate();

  const signOutUser = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.log("Error signing out:", error.message);
    } else {
      navigate("/");
    }
  };

  return (
      <div className="home">
        {}
        <h1>Hello Logged in user!</h1>
        <button onClick={ () => signOutUser()}>Sign Out</button>
      </div>
  );
};

export default Home;
