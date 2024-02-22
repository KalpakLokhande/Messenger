import React from "react";
import './Login.css'
import bg from '../assets/bg.jpg'

const Login = () => {

    return (
        <div style={{position:'relative', width:'100%', height:'100%', display:'flex', justifyContent:'center', alignItems:'center'}}>
            <img src={bg} style={{ position: 'absolute', width: '100%', height: '100%' }} ></img>
            <div style={{ width: '100%', height: '100%', position: 'absolute', background: 'rgba(1,1,1,0.5)' }} ></div>
            <div className="login">
                <h1>LOGIN</h1>
                <form action='submit'>

                    <input type="text" placeholder="Enter your Username" ></input>
                    <input type="text" placeholder="Enter your Password" ></input>

                    <button>Login</button>

                </form>
                <p>Don't Have an Account? <a href="/signup" >SignUp</a></p>
            </div>
        </div>

    )

}

export default Login