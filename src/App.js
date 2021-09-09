import "./App.css";
import { Route, Switch } from "react-router";
import Homepage from "./components/home/homepage";
import Problems from "./components/problems/problems";
import About from "./components/about/about";
import Login from "./components/login/login";
import Signup from "./components/signup/signup";
import Header from "./components/header/header";
import Resources from "./components/resources/resources";

function App() {
  return (
    <>
      <Header />
      <div className="App">
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/problems" component={Problems} />
          <Route path="/resources" component={Resources} />
          <Route path="/about" component={About} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
        </Switch>
      </div>
    </>
  );
}

export default App;
