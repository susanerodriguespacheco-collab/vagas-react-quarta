import { useState } from "react";
import { useNavigate } from "react-router";

function Login() {
    const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
 

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      console.log("Email:", email);
      console.log("Password:", password);
      navigate("/home");
    }}>
        <h3>Login</h3>  
        <label htmlFor="email">Email:</label>
        <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
        />  
        <label htmlFor="password">Password:</label>
        <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="senha"
        />  
        <button type="submit">Entrar</button>
        </form>
    );
    }

export default Login;