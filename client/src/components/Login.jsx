import React, { useState } from "react";
import "./../index.css"; 

function Login(props) {
    const [type, setType] = useState("signIn");
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const handleOnClick = (text) => {
      if (text !== type) {
        setType(text);
        return;
      }
    };
    const containerClass =
      "container " + (type === "signUp" ? "right-panel-active" : "");
    return (
      <div className="App">
        <h2>WELCOME TO SPLITMATES</h2>
        <div className={containerClass} id="container">
          <div className="form-container sign-up-container">
            <form>
              <h1>Create Account</h1>
              <input
                type="text"
                name="name"
                onChange={(e)=>{setName(e.target.value)}}
                placeholder="Name"
              />
              <input
                type="email"
                name="email"
                onChange={(e)=>{setEmail(e.target.value)}}
                placeholder="Email"
              />
              <input
                type="password"
                name="password"
                onChange={(e)=>{setPassword(e.target.value)}}
                placeholder="Password"
              />
              <button onClick={()=>props.handleCreateFriend(name,email,password)}>Sign Up</button>
            </form>
          </div>
          <div className="form-container sign-in-container">
            <form>
              <h1>Sign in</h1>
              <input
                type="email"
                name="email"
                placeholder="Email"
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
              />
              <a href="#">Forgot your password?</a>
              <button onClick={()=>props.setView("home")}>Sign In</button>
            </form>
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1>Welcome Back!</h1>
                <p>To keep connected with us please login with your personal info</p>
                <button
                  className="ghost"
                  id="signIn"
                  onClick={() => handleOnClick("signIn")}
                >
                  Sign In
                </button>
              </div>
              <div className="overlay-panel overlay-right">
                <h1>Hello, Friend!</h1>
                <p>Enter your personal details and start your journey with us</p>
                <button
                  className="ghost"
                  id="signUp"
                  onClick={() => handleOnClick("signUp")}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

export default Login;
