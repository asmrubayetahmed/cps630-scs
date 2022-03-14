import React, { useState } from 'react';
import Header from '../components/Header';
import ReactDOM from "react-dom";

function SignupForm({ Login, error }) {

  const [details, setDetails] = useState({name: "", email: "", password: "", id: "", number: "", m_address: ""});

  const submitHandler = e => {
    e.preventDefault();

    Login(details);
  }

  return (

    <form onSubmit = {submitHandler}>
      <div className = "form-inner"><br/><br/>
        <h1 style={{fontWeight: "bold"}} className = "flex justify-center items-center text-xl" > Sign Up </h1>
        { (error != "") ? ( <div className = "error"> {error} </div>) : "" }<br/>

        <div className = "flex justify-center items-center" >
          <label htmlFor = "id"> ID: </label>
          <input type = "text" name = "id" id = "id" onChange = {e => setDetails({...details, id: e.target.value})} value = {details.id} />
        </div><br/>

        <div className = "flex justify-center items-center" >
          <label htmlFor = "password"> Password: </label>
          <input type = "password" name = "password" id = "password" onChange = {e => setDetails({...details, password: e.target.value})} value = {details.password} />
        </div><br/>

        <div className = "flex justify-center items-center" >
          <label htmlFor = "name"> Name: </label>
          <input type = "text" name = "name" id = "name" onChange = {e => setDetails({...details, name: e.target.value})} value = {details.name} />
        </div><br/>

        <div className = "flex justify-center items-center" >
          <label htmlFor = "email"> Email: </label>
          <input type = "email" name = "email" id = "email" onChange = {e => setDetails({...details, email: e.target.value})} value = {details.email} />
        </div><br/>

        <div className = "flex justify-center items-center" >
          <label htmlFor = "number"> Phone Number: </label>
          <input type = "number" name = "number" id = "number" onChange = {e => setDetails({...details, number: e.target.value})} value = {details.number} />
        </div><br/>

        <div className = "flex justify-center items-center" >
          <label htmlFor = "m_address"> Mailing Address: </label>
          <input type = "text" name = "m_address" id = "m_address" onChange = {e => setDetails({...details, m_address: e.target.value})} value = {details.m_address} />
        </div>

        <br/>

        <label className = "flex justify-center items-center">
          Select Delivery Warehouse:
          <br/><select>
            <option value="-">-</option>
            <option value="ontario">ONTARIO: 1142 Nelson Street, Bearskin Lake</option>
            <option value="bc">BC: 3662 Kenmount Road, St Johns</option>
            <option value="alberta">ALBERTA: 561 Silver Springs Blvd, Calgary</option>

          </select>
        </label><br/><br/>

          <div className = "flex justify-center items-center"> <button>
            SIGN UP
          </button></div>


      </div>
    </form>

  )

}

export default SignupForm
