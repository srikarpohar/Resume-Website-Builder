import React from 'react';

import './signup.styles.css';

export const SignUp = (props) => {
    return (
        <div className={props.isSignUp}>
            <h1>SignUp</h1>
            <form>
                <span>Username: </span><input type="text" name="username" placeholder="Enter Username" />
                <span>Email: </span><input type="text" name="email" placeholder="Enter Email" />
                <span>Password: </span><input type="text" name="password" placeholder="Enter Password" />
                <span>Confirm Password: </span><input type="text" name="repassword" placeholder="Re-Enter Password" />
                <input type="Submit" value="Submit" name="Submit" onClick={(e) => {
                    e.preventDefault();
                    props.setSignUp({
                        login: "invisible",
                        signup: "invisible",
                        home: "visible"
                    });
                }} />
                <button onClick={(e) => {
                    e.preventDefault();
                    props.setSignUp({
                        login: "visible",
                        signup: "invisible",
                        home: "invisible"
                    })
                }}>LogIn</button>
            </form>
        </div>
    )
}