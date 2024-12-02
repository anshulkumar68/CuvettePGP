import React, { useState } from "react";

const SignIn = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  async function handleSubmit(e) {
    e.preventDefault();
    const response = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({email, password}),
    });
    const data = await response.json();
    console.log(data)
    setEmail("");
    setPassword("");
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Sign In form</h1>
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
        <button>Sign In</button>
      </form>
    </>
  );
};

export default SignIn;
