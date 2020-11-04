import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Work from "./containers/Work";
import About from "./containers/About";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/about" component={About} />
          <Route path="/" component={Work} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
