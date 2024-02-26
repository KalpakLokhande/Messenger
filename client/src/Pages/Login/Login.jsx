import React from "react";
import './Login.css'
import bg from '../assets/bg.jpg'
import axios from "axios";
import { useState } from "react";
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleLogin = async (e) => {
        e.preventDefault()
        try {

            const response = await axios.post('http://localhost:3001/login', { email: email, password: password })
            sessionStorage.setItem('user', JSON.stringify(response.data))
            navigate('/home')

        } catch (error) {
            console.log(error)
        }

    }


    return (
        <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src={bg} style={{ position: 'absolute', width: '100%', height: '100%' }} ></img>
            <div style={{ width: '100%', height: '100%', position: 'absolute', background: 'rgba(1,1,1,0.5)' }} ></div>
            <div className="login">
                <h1>LOGIN</h1>
                <form action='submit'>

                    <input onChange={(e) => { setEmail(e.target.value) }} type="text" placeholder="Enter your Username" style={{ textAlign: 'center' }}></input>
                    <input onChange={(e) => { setPassword(e.target.value) }} type="text" placeholder="Enter your Password" style={{ textAlign: 'center' }} ></input>

                    <button type="submit" onClick={(e) => { handleLogin(e) }} >Login</button>

                </form>
                <p>Don't Have an Account? <a href="/signup" >SignUp</a></p>
            </div>
        </div>

    )

}

export default Login