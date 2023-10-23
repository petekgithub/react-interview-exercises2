// custom hook should start with "use" keyword
import React from "react";
import { useState, useEffect } from "react";

const useGetDatas = () => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);

  const getUsers = () => {
    fetch("https://jsonplaceholder/typicode.com/users")
      .then((res) => res.json())
      .then((json) => setUsers(json))
      .catch((err) => console.log(err));
  };

  const getPosts = () => {
    fetch("https://jsonplaceholder/typicode.com/posts")
      .then((res) => res.json())
      .then((json) => setPosts(json))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getPosts();
    getUsers();
  }, []);

  return { users, posts };
};

export default useGetDatas;
