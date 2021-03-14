import React from 'react';
import { setCurrentUser } from '../../../redux/user/user.actions';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './login.styles.scss';
import { signInWithGoogle } from '../../../firebase/firebase.utils';

class Login extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            email: '',
            page: '/',
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
        signInWithGoogle();
    }

    handleChange = (e) => {
        const { name, value } = e.target;

        this.setState({ [name]: value });
    }

    render() {
        return (
            <div className="login">
                <h1 className="logintext">LogIn</h1>
                <form className="loginform">
                    <input type="text" name="username" placeholder="Enter Username" onChange={this.handleChange} />< br />
                    <input type="password" name="password" placeholder="Enter password" onChange={this.handleChange} /><br />
                    <Link className="loginbutton" to="/home" onClick={this.handleSubmit} >LogIn</Link><br />
                    <Link className="googlelogin" to="/home" onClick={this.handleGoogleLogin} >LogIn with Google</Link>
                </form>
            </div>
        )
    }
}

const mapStatetoProps = state => ({
    page: state.user.page
});

const mapDispatchtoProps = (dispatch) => ({
    setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStatetoProps, mapDispatchtoProps)(Login);