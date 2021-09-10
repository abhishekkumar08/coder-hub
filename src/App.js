import "./App.css";
import { Route, Switch } from "react-router";
import Homepage from "./components/home/homepage";
import Problems from "./components/problems/problems";
import About from "./components/about/about";
import Login from "./components/login/login";
import Signup from "./components/signup/signup";
import Header from "./components/header/header";
import Resources from "./components/resources/resources";
import Footer from "./components/footer/footer";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/problems" component={Problems} />
          <Route path="/resources" component={Resources} />
          <Route path="/about" component={About} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
        </Switch>
        <Footer />
      </div>
    </>
  );
}

export default App;
