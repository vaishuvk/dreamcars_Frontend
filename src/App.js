import React,{useState} from 'react';
// import {Switch, Route } from 'react-router-dom'
import UserLogin from './components/UserLogin'
import './App.css';
import HomePage from './components/HomePage'
import LoginForm from './components/LoginForm'
import GetAllCars from './components/GetAllCars'


function App() {

/*
  const adminUser = {
    name: "admin",
    password: "admin123"
  }

  const [user, setUser] = useState({name: "", password:""});
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);

    if (details.name == adminUser.name && details.password == adminUser.password){
      console.log("Logged In");
        setUser({
          name:  details.name,
          password: details.password
        })
      }
    else{
      console.log("Details do not match!!");
    }
  }

  const Logout = details => {
    setUser({name: "", password:""});
  }

  */


  return (
/*    <div className="App">
      {(user.name != "") ? (
        <div className="welcome">
          <h2>Welcome, <span> {user.name} </span></h2>
          <button onClick={Logout}>Logout</button>
          </div>
      ) : (
        <LoginForm Login={Login} error={error}/>
      )}
    </div>    */

      
      
      <GetAllCars/>
      
      /* <HomePage/> */

      /* <UserLogin/>  */
  );
}

export default App;
