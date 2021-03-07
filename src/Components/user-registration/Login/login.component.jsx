import React from 'react';
import './login.styles.css';

export const Login = (props) => {

    return (
        <div className={props.isLogIn}>
            <h1>LogIn</h1>
            <form>
                <span>Username: </span><input type="text" name="username" placeholder="Enter Username" />< br />
                <span>Password: </span><input type="password" name="password" placeholder="Enter password" /><br />
                <input type="Submit" value="Submit" name="Submit" onClick={(e) => {
                    e.preventDefault();
                    props.setLogIn({
                        login: "invisible",
                        signup: "invisible",
                        home: "visible"
                    })
                }} /><br />
                <button onClick={(e) => {
                    e.preventDefault();
                    props.setLogIn({
                        login: "invisible",
                        signup: "visible",
                        home: "invisible"
                    });
                }}>SignUp</button><br />
            </form>
        </div>
    )
}