import React, { useState } from "react";

const Signup = () => {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [userName, setUserName] = useState()

    return (
        <div className="signup">
            <h1>Signup</h1>
            <form action='submit'>

                <input type="text" placeholder="Set your Username" onChange={(e) => { setUserName(e.target.value) }}></input>
                <input type="text" placeholder="Enter your Email" onChange={(e) => { setEmail(e.target.value) }}></input>
                <input type="text" placeholder="Enter your Password" onChange={(e) => { setPassword(e.target.value) }}></input>
                <button>Sign Up</button>
                <h3>OR</h3>
                <button>Sign-in with Google</button>

            </form>
            <p>Have an Acoount? Login</p>
        </div>
    )

}

export default Signup