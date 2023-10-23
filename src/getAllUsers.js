export const getUsers = fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .catch((err) => console.log(err));
