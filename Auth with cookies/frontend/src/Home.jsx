import { useEffect, useState } from "react";
import axios from "./axios";

export default function Home() {
  const [user, setUser] = useState(null);  
  const [loading, setLoading] = useState(true);  

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get("/auth/me");
        if (res.data.userId) {
          setUser(res.data); 
        } else {
          setUser(null);      
        }
      } catch (err) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  if (loading) return <h1>Loading...</h1>;

  if (!user) {
    return (
      <div>
        <h1>Welcome Guest</h1>
        <a href="/login">Login</a> | <a href="/register">Register</a>
      </div>
    );
  }

  return (
    <div>
      <h1>Welcome, User!</h1>
      <p>User ID: {user.userId}</p>
    </div>
  );
}
