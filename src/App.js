import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" element={<Login />} />
          <Route
            exact
            path="/home"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
