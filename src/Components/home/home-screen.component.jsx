import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setCurrentUser } from '../../redux/user/user.actions';
import './home-screen.styles.css';
import { auth } from '../../firebase/firebase.utils';

class Home extends React.Component {

    handleLogout = (e) => {
        //handle signout logic for auth and db
        auth.signOut();
    }

    render() {
        return (
            <div>
                <h1>Welcome {this.props.username}</h1><br />
                <Link to="/" id="logout" onClick={this.handleLogout}>Logout</Link>
            </div>
        )
    }
}

const mapStatetoProps = (state) => ({
    username: state.user.currentUser // state has different reducers(user) which provide different state objects
});

const mapDispatchtoProps = (dispatch) => ({
    setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStatetoProps, mapDispatchtoProps)(Home);