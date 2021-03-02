import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import jwtDecode from "jwt-decode";
import NavBar from "../src/components/common/navbar";
import LoginForm from "../src/components/common/loginForm";
import Logout from "../src/components/common/logout";
import RegisterForm from "../src/components/common/registerForm";
import MovieForm from "../src/components/common/movieForm";
import Movies from "./components/movies";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NotFound from "./components/notFound";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

class App extends Component {
  state = {};
  componentDidMount() {
    try {
      const jwt = localStorage.getItem("token");
      const user = jwtDecode(jwt);
      this.setState({ user });
    } catch (ex) {}
  }

  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        <NavBar user={this.state.user} />
        <main className="container p-5">
          <Switch>
            <Route path="/loginForm" component={LoginForm} />
            <Route path="/logout" component={Logout} />
            <Route path="/registerForm" component={RegisterForm} />
            <Route path="/movies/:id" component={MovieForm} />
            <Route path="/Rentals" component={Rentals} />
            <Route path="/Customers" component={Customers} />
            <Route path="/Movies" component={Movies} />
            <Route path="/notFound" component={NotFound} />
            <Redirect from="/" exact to="/movies" />
            <Redirect to="/notFound" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
