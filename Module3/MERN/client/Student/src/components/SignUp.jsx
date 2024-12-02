import React, { useState } from "react";

const SignUp = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    async function handleSubmit(e){
        e.preventDefault()
        const response = await fetch("http://localhost:3000/register", {
            method: "POST",
            headers : {"Content-Type" : "application/json"},
            body : JSON.stringify({username, email, password})
        })
        const data = await response.json();
        console.log(data);
        setUsername("")
        setEmail("")
        setPassword("")
    }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Sign Up form</h1>
        <div className="form-container">
          <label htmlFor="">Username</label>
          <input
            type="text"
            name="username"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-container">
          <label htmlFor="">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-container">
          <label htmlFor="">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button>Sign Up</button>
      </form>
    </>
  );
};

export default SignUp;
