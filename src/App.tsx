import axios from "axios";
import { useCallback } from "react";
import "./styles.css";

type User = {
  id: number;
  name: string;
  email: string;
}

export default function App() {
  const getUsers = useCallback(() => {
    axios
    .get<Array<User>>("https://jsonplaceholder.typicode.com/users")
    .then(res => console.log(res.data))
    .catch(error => console.log(error))
  },[])
  return (
    <div className="App">
     <button onClick = {getUsers}>AXIOS GET TEST</button>
    </div>
  );
}
