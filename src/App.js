import "./App.css";
import { Login } from "./Components/user-registration/Login/login.component";
import { useState } from "react";
import { SignUp } from "./Components/user-registration/SignUp/signup.component";
import { Home } from "./Components/home/home-screen.component";

function App() {
  const [screen, setScreen] = useState({
    login: "visible",
    signup: "invisible",
    home: "invisible",
  });

  return (
    <div className="App">
      <Login isLogIn={screen.login} setLogIn={setScreen}></Login>
      <SignUp isSignUp={screen.signup} setSignUp={setScreen}></SignUp>
      <Home isHome={screen.home} setHome={setScreen}></Home>
    </div>
  );
}

export default App;
