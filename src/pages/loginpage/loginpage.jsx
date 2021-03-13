import Login from '../../Components/user-registration/Login/login.component';
import SignUp from '../../Components/user-registration/SignUp/signup.component';
import './login.page.scss';

export const LoginPage = () => {
    return (<div className="login1">
        <h1>RESUME BUILDER</h1>
        <Login />
        <SignUp />
    </div>);
};