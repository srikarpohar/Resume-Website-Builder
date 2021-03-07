import React from 'react';

import './signup.styles.css';

export const SignUp = (props) => {
    return (
        <div className={props.isSignUp}>
            <h1>SignUp</h1>
            <form>
                <span>Username: </span><input type="text" name="username" placeholder="Enter Username" /><br />
                <span>Email: </span><input type="email" name="email" placeholder="Enter Email" /><br />
                <span>Password: </span><input type="password" name="password" placeholder="Enter Password" /><br />
                <span>Confirm Password: </span><input type="password" name="repassword" placeholder="Re-Enter Password" /><br />
                <input type="Submit" value="Submit" name="Submit" onClick={(e) => {
                    e.preventDefault();
                    props.setSignUp({
                        login: "invisible",
                        signup: "invisible",
                        home: "visible"
                    });
                }} /><br />
                <button onClick={(e) => {
                    e.preventDefault();
                    props.setSignUp({
                        login: "visible",
                        signup: "invisible",
                        home: "invisible"
                    })
                }}>LogIn</button><br />
            </form>
        </div>
    )
}