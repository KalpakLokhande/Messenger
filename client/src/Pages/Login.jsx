import React from "react";

const Login = () => {



    return (
        <div className="login">
            <h1>LOGIN</h1>
            <form action='submit'>

                <input type="text" placeholder="Enter your Username" ></input>
                <input type="text" placeholder="Enter your Password" ></input>

                <button>Login</button>

            </form>
            <p>Don't Have an Account? SignUp</p>
        </div>
    )

}

export default Login