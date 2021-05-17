import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { SignUp } from "./SignUp/SignUp";
// import { SignUpSuccess } from "./SignUpSuccess/SignUpSuccess";
import { SignIn } from "./SignIn/SignIn";
import { MainPage } from "./MainPage/MainPage";
import error404  from './404.png'
import Cookies from "js-cookie";

function App() {
  let session_id = Cookies.get("session_id");

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <SignUp />
          </Route>
          <Route path="/SignUp">
            <SignUp />
          </Route>
          {/* <Route path="/SignUpSuccess">
            <SignUpSuccess />
          </Route> */}
          <Route path="/SignIn">
            <SignIn />
          </Route>
          {session_id ? (
            <Route path="/main-page">
              <MainPage />
            </Route>
          ) : (
            // <p>page not found</p>
           <img className="error404" src={error404} alt="" />
          )}
          {/* <Route path="/main-page">
            <MainPage />
          </Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
