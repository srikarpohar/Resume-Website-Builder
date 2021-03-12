import "./App.css";
//import Login from "./Components/user-registration/Login/login.component";
import React from "react";
import { LoginPage } from "./pages/loginpage/loginpage";
//import SignUp from "./Components/user-registration/SignUp/signup.component";
import Home from "./Components/home/home-screen.component";
import { Redirect, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.isFirstTime = false;
  }

  componentDidMount() {
    this.isFirstTime = true;
  }

  choosePage = () => {
    return !this.isFirstTime ? (
      this.props.currentUser ? (
        <Home />
      ) : (
        <div>
          <Redirect to="/" />
        </div>
      )
    ) : (
      <div />
    );
  };

  render() {
    return (
      <div className="App">
        {this.choosePage()}
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/home" component={Home} />
        </Switch>
      </div>
    );
  }
}

const mapStatetoProps = (state) => ({
  currentUser: state.user.currentUser, // state has different root reducers which return different objects
});

export default connect(mapStatetoProps, null)(App);
