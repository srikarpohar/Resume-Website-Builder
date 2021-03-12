import React from 'react';
import './login.styles.css';
import { setCurrentUser } from '../../../redux/user/user.actions';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


class Login extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            email: '',
        }
    }

    handleSubmit = (e) => {
        //const { username, password } = this.state;
        const { setCurrentUser } = this.props;
        // handle signin logic using auth first
        // if user enters name instead of email check in db for username
        // if exists get the email also.
        // if it doesnt exists in both, consloe.log(error)
        setCurrentUser(this.state);
    }

    handleGoogleLogin = (e) => {
        const { setCurrentUser } = this.props;
        // handle signin logic using auth first
        // if user enters name instead of email check in db for username
        // if exists get the email also.
        // if it doesnt exists in both, consloe.log(error)
        setCurrentUser(this.state);

    }

    handleChange = (e) => {
        const { name, value } = e.target;

        this.setState({ [name]: value });
    }

    render() {
        return (
            <div style={{ float: 'left' }}>
                <h1>LogIn</h1>
                <form>
                    <span>Username/Email: </span><input type="text" name="username" placeholder="Enter Username" onChange={this.handleChange} />< br />
                    <span>Password: </span><input type="password" name="password" placeholder="Enter password" onChange={this.handleChange} /><br />
                    <Link to="/home" onClick={this.handleSubmit} >LogIn</Link><br />
                    <Link to="/home" onClick={this.handleGoogleLogin} >LogIn with Google</Link>
                </form>
            </div>
        )
    }
}

const mapDispatchtoProps = (dispatch) => ({
    setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchtoProps)(Login);