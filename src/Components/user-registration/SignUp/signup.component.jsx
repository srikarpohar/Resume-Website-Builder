import React from 'react';
import { setCurrentUser } from '../../../redux/user/user.actions';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import './signup.styles.scss';

class SignUp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            email: '',
            password: '',
            repassword: ''
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target;

        this.setState({ [name]: value });
    }

    handleSubmit = (e) => {
        const { setCurrentUser } = this.props;
        //Implement signup logic for email and passowrd
        // Store the username with email, password in db

        setCurrentUser(this.state);
    }


    render() {
        return (
            <div className="signup">
                <h1 className="signuptext">SignUp</h1>
                <form className="signupform">
                    <input required type="text" name="username" placeholder="Enter Username" value={this.state.username} onChange={this.handleChange} /><br />
                    <input required type="email" name="email" placeholder="Enter Email" value={this.state.email} onChange={this.handleChange} /><br />
                    <input className="pass" required type="password" name="password" placeholder="Enter Password" value={this.state.password} onChange={this.handleChange} /><br />
                    <input className="repass" required type="password" name="repassword" placeholder="Re-Enter Password" value={this.state.repassword} onChange={this.handleChange} /><br />
                    <Link className="signupbutton" to="/home" onClick={this.handleSubmit}>SignUp</Link>
                </form>
            </div>
        )
    }
}

const mapDispatchtoProps = (dispatch) => ({
    setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchtoProps)(SignUp);