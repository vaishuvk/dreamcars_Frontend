import React, { Component } from "react";



class UserLogin extends Component {

    state = {
        username:'',
        password:''
    }

    handleChange = (e) =>{
        const {name,value} = e.target
        this.setState({[name]:value})

    }

    handleSubmit = (e) =>{
        e.preventDefault()

    }

    render(){
        return(
            <div>
                <form onSubmit={ this.handleSubmit }>
                    UserName: &nbsp; 
                    <input type='username' name='Name' required onChange={this.handleChange} /><br/>
                    Password: &nbsp; 
                    <input type='password' name='Password' required onChange={this.handleChange} /><br/>
                    &nbsp;  <button onSubmit={this.handleSubmit}>Log In</button>
                </form>
            </div>
       )

    }
}

export default UserLogin;