import React, { useState } from 'react';
import SignupForm from './SignupForm.js';
import Header from '../components/Header.js';


function Signup() {

  const adminUser = {
    email: "test@tester.com",
    password:"test123"
  }

  const [user, setUser] = useState({name: "", email: ""});
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);

    if(details.email == adminUser.email && details.password == adminUser.password) {
      console.log("Logged In");
      setUser({
        name: details.name,
        email: details.email
      });
    } else {
      console.log("Login Failed: Details do not match");
      setError("Login Failed: Details do not match")
    }
  }

  const Logout = () => {
    setUser({ name: "", email: "" });
  }

  return (
    <div className="App">
    <Header />
      {(user.email != "") ? (
        <div className = "welcome">
          <h2>Welcome, <span> {user.name} </span> </h2>
          <button onClick = {Logout}> Logout </button>
        </div>
      ) : (
        <SignupForm  Login = {Login} error = {error} />
      )
    }

    </div>
  );
}



export default Signup;
