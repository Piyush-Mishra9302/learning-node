import { useState } from "react";
import axios from "./axios";


export default function Register() {
  const [input, setInput] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = async () => {
    const res = await axios.post("/auth/register", input);
    alert(res.data.message);
  };

  return (
    <div>
      <h2>Register</h2>
      <input placeholder="Username" onChange={e => setInput({...input, username: e.target.value})} />
      <input placeholder="Email" onChange={e => setInput({...input, email: e.target.value})} />
      <input placeholder="Password" type="password" onChange={e => setInput({...input, password: e.target.value})} />
      <button onClick={handleSubmit}>Register</button>
    </div>
  );
}
