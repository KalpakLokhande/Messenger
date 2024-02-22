import React, { useState } from "react";
import './Signup.css'
import bg from '../assets/bg.jpg'

const Signup = () => {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [userName, setUserName] = useState()

    return (
        <div style={{position:'relative',width:'100%', height:'100%',display:'flex', justifyContent:'center', alignItems:'center'}}>
            <img src={bg} style={{ position: 'absolute', width: '100%', height: '100%'}} ></img>
            <div style={{ width: '100%', height: '100%', position: 'absolute', background: 'rgba(1,1,1,0.5)'}} ></div>
            <div className="signup" >
                <h1>Signup</h1>
                <form action='submit'>

                    <input type="text" placeholder="Set your Username" onChange={(e) => { setUserName(e.target.value) }}></input>
                    <input type="text" placeholder="Enter your Email" onChange={(e) => { setEmail(e.target.value) }}></input>
                    <input type="text" placeholder="Enter your Password" onChange={(e) => { setPassword(e.target.value) }}></input>
                    <button>Sign Up</button>
                    {/* <h3>OR</h3>
                    <button>Sign-in with Google</button> */}

                </form>
                <p style={{paddingBottom:'20px'}} >Have an Account?  <a href="/login" >Login</a></p>
            </div>
        </div>
    )

}

export default Signup