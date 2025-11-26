import { useState } from "react";
import axios from "./axios";


export default function Login() {
  const [input, setInput] = useState({
    email: "",
    password: ""
  });

  const handleSubmit = async () => {
    const res = await axios.post("/auth/login", input);
    alert(res.data.message);
  };

  return (
    <div>
      <h2>Login</h2>
      <input placeholder="Email" onChange={e => setInput({...input, email: e.target.value})} />
      <input type="password" placeholder="Password" onChange={e => setInput({...input, password: e.target.value})} />
      <button onClick={handleSubmit}>Login</button>
    </div>
  );
}
