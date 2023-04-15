import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/home.css";
import supabase from "../config/client";

const Home = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const getUserData = async () => {
      try {
        await supabase.auth.getUser().then((response) => {
          console.log(response);
          setUser(response?.data?.user);
        });
      } catch (err) {
        console.log(err);
        alert(err);
      }
    };
    getUserData();
  }, []);

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
      <button onClick={ () => signOutUser()}>Sign Out</button>
    </div>
  );
};

export default Home;
