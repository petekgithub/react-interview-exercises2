import React from "react";
import { useContext } from "react";

import { UserData } from "../contexts/GlobalContext";

const Profile = () => {
  let { setName } = useContext(UserData);

  return (
    <div>
      <button onClick={() => setName("Can")}>Change the name</button>
    </div>
  );
};

export default Profile;
