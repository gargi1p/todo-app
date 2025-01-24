import React, { useState } from "react";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);

  const handleLogin = () => {
    const savedPassword = localStorage.getItem(username);
    if (savedPassword === password) {
      onLogin(username);
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  const handleRegister = () => {
    if (username.trim() && password.trim()) {
      localStorage.setItem(username, password);
      onLogin(username);
    } else {
      alert("Please fill out both fields.");
    }
  };

  return (
    <div className="login">
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter your username"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter your password"
      />
      <button onClick={isRegistering ? handleRegister : handleLogin}>
        {isRegistering ? "Register" : "Login"}
      </button>
      {!isRegistering && (
        <button onClick={() => setIsRegistering(true)}>Register First</button>
      )}
    </div>
  );
};

export default Login;
