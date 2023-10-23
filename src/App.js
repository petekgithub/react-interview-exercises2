import { useState, useEffect } from "react";
import "./App.css";
//import axios from "axios";
import Profile from "./components/Profile";
import Home from "./components/Home";
import { UserData } from "./contexts/GlobalContext";
import getUsers from "./getAllUsers";

import useGetDatas from "./hooks/useGetDatas";

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

// function App() {
//   const [name, setName] = useState("Petek");

//   return (
//     <div className="App">
//       <UserData.Provider value={{ name, setName }}>
//         <Profile />
//         <Home />
//       </UserData.Provider>
//     </div>
//   );
// }

// export default App;

//-----------------------Helper functions---------------------------------------------------
// console.log(data) will return the Promise so for that reason we'll use async await
// function App() {
//   const getUsersHelper = async () => {
//     let data = await getUsers();
//     console.log(data);
//   };

//   useEffect(() => {
//     getUsersHelper();
//   }, []);

//   return <div className="App" >Helper functions</div>;
// }

//-------------------------Running Arrays of Functions-------------------------------------
/**
 * Write a function which takes an array of multiple functions and executes them one by one, in left to right manner.
 */
// function App() {
//   const fnArray = [
//     function fn(a, b) {
//       return a + b;
//     },
//     function fn(a, b) {
//       return a - b;
//     },
//     function fn(a, b) {
//       return a * b;
//     },
//     function fn(a, b) {
//       return a / b;
//     },
//   ];

//   const mainFn = () => {
//     let result = fnArray.map((fn) => {
//       return fn(3, 5);
//     });
//     console.log(result);
//   };

//   useEffect(() => {
//     mainFn();
//   }, []);

//   return <div className="App"></div>;
// }

// export default App;

//-----------------------------------CustomHooks-----------------------------------------------------
function App() {
  let { users, posts } = useGetDatas; // destructure the data, comes from the custom hook

  return (
    <div className="App">
      <h1>{users}</h1>
      <div>
        {users.map((user) => {
          <li key={user.id}>{user.name}</li>;
        })}
      </div>
      <h2>{posts}</h2>
    </div>
  );
}

export default App;
