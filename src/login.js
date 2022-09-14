import React from "react";
import './login.css'

const Login = (props) => {

    const { email,setEmail,pass,setPass,handleLogin,handleSignup,hasaccount,emailerror,passworderror,setHasaccount } =props;

    return(
        <section className="login">
            <div className="loginContainer">
                <label>Username</label>
                <input type="text" autoFocus required 
                value={email}
                onchange = {(e) => setEmail(e.target.value)}
                />
                <p className="errorMsg">{emailerror}</p>
                <label>Password</label>
                <input type="password" autoFocus required 
                value={pass}
                onchange = {(e) => setPass(e.target.value)}
                />
                <p className="errorMsg">{passworderror}</p>
                <div className="btnContainer">
                    {hasaccount ? (
                        <>
                            <button onClick={handleLogin}>Sign in</button>
                            <p>Don't have an account<span onClick={() => setHasaccount(!hasaccount)}>Sign Up</span></p>
                        </>
                    ):(
                        <>
                            <button onClick={handleSignup}>Sign Up</button>
                            <p>have an account<span>Sign in</span></p>
                        </>
                    )
                }
                </div>
            </div>
        </section>
    )
}

export default Login; 