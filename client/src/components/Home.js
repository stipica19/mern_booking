import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "../actions/authAction";

const Home = () => {
  const dispatch = useDispatch();

  const [user, setUser] = useState(null);
  useEffect(() => {
    dispatch(setCurrentUser());
  }, [dispatch]);

  return (
    <div className="home">
      <div className="home-text">
        <h1>Pridružite nam se u SUBOTU na partiju godine</h1>
        <a href="/" className="btn btn-primary">
          Rezerviraj stol
        </a>
      </div>
    </div>
  );
};

export default Home;
