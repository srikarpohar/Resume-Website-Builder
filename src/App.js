import "./App.css";
import React from "react";
import { LoginPage } from "./pages/loginpage/loginpage";
import Home from "./Components/home/home-screen.component";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.actions";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.isFirstTime = true;
    this.unsubscribeFromAuth = null;
  }

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          const userData = snapShot.data();
          setCurrentUser({
            id: snapShot.id,
            username: userData.displayName,
            email: userData.email,
            count: 1,
          });
        });
      } else {
        setCurrentUser({
          username: null,
          email: null,
          count: 1,
        });
      }
    });
    this.isFirstTime = false;
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  choosePage = () => {
    return this.props.count === 1 ? (
      this.props.currentUser ? (
        <Home />
      ) : (
        <LoginPage />
      )
    ) : (
      <div></div>
    );
  };

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" render={() => this.choosePage()} />
          <Route
            exact
            path="/home"
            render={() => (this.props.currentUser ? <Home /> : <LoginPage />)}
          />
        </Switch>
      </div>
    );
  }
}

const mapStatetoProps = (state) => ({
  currentUser: state.user.currentUser, // state has different root reducers which return different objects
  count: state.user.count,
});

const mapDispatchtoProps = (dispatch) => ({
  setCurrentUser: (user) => {
    dispatch(setCurrentUser(user));
  },
});

export default connect(mapStatetoProps, mapDispatchtoProps)(App);
