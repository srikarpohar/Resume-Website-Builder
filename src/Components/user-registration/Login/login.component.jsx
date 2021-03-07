import React from 'react';
import './login.styles.css';

export const Login = (props) => {
    return (
        <div className={props.isLogIn}>
            <h1>LogIn</h1>
            <form>
                <span>Username: </span><input type="text" name="username" placeholder="Enter Username" />
                <span>Password: </span><input type="text" name="password" placeholder="Enter password" />
                <input type="Submit" value="Submit" name="Submit" onClick={(e) => {
                    e.preventDefault();
                    props.setLogIn({
                        login: "invisible",
                        signup: "invisible",
                        home: "visible"
                    })
                }} />
                <button onClick={(e) => {
                    e.preventDefault();
                    props.setLogIn({
                        login: "invisible",
                        signup: "visible",
                        home: "invisible"
                    });
                }}>SignUp</button>
            </form>
        </div>
    )
}