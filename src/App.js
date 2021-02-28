import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';
import Login from './auth/Login';
import Register from './auth/Register';

function App() {
  return (
    <div className="App">
      <Router>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a class="navbar-brand" href="#"><b>QUOTES random</b></a>
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="#">Disabled</a>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item">
              <a class="nav-link " href="/login">Login</a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="/register">Register</a>
            </li>
          </ul>
          </form>
        </div>
      </nav>
      <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
            <Register/>
            </Route>
          </Switch>
      </Router>
        
       
    </div>
  );
}

export default App;
