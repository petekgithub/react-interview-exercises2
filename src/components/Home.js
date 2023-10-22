import React from "react";
import { useContext } from "react";
import { UserData } from "../contexts/GlobalContext";

const Home = () => {
  let { name } = useContext(UserData);

  return (
    <div>
      <h1>My name is {name} </h1>
    </div>
  );
};

export default Home;
