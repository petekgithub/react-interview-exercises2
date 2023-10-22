import { useState, useEffect } from "react";
import "./App.css";
//import axios from "axios";
import Profile from "./components/Profile";
import Home from "./components/Home";
import { UserData } from "./contexts/GlobalContext";

//---------------------------------Rest---------------------------------------------------------
// function App() {
//   // POST, GET, PUT or PATCH and DELETE

//   const [name, setName] = useState("");

//   const postData = () => {
//     axios
//       .post("https://62de906f976ae7460bdd024.mockapi.io/users", {
//         name: "petek",
//         age: 22,
//         hobbies: ["coding", "crossfit"],
//       })
//       .then((res) => {
//         console.log(res.data);
//       })
//       .catch((err) => console.log(err));
//   };

//   return (
//     <div className="App">
//       <input placeholder="Name" onChange={(e) => setName(e.target.value)} />
//       <button onClick={postData}>Post Data</button>
//     </div>
//   );
// }

// export default App;

// //---------------------------------Debouncing--------------------------------------------------

// const pinAPI = `https://api.postalpincode.in/pincode/`;

// function App() {
//   const [pin, setPin] = useState("");

//   useEffect(() => {
//     const debouncing = setTimeout(() => {
//       axios
//         .get(pinAPI + pin)
//         .then((res) => console.log(res))
//         .catch((err) => console.log(err));
//     }, 2000);

//     return () => {
//       clearTimeout(debouncing);
//     };
//   }, [pin]);

//   return (
//     <div className="App">
//       <input
//         type="text"
//         placeholder="Enter yout Pin-Code"
//         onChange={(e) => setPin(e.target.value)}
//       />
//     </div>
//   );
// }

// export default App;

//---------------------------------ContextAPI--------------------------------------------------

function App() {
  const [name, setName] = useState("Petek");

  return (
    <div className="App">
      <UserData.Provider value={{ name, setName }}>
        <Profile />
        <Home />
      </UserData.Provider>
    </div>
  );
}

export default App;
