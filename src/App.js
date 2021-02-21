import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import NavBar from "../src/components/common/navbar";
import LoginForm from "../src/components/common/loginForm";
import RegisterForm from "../src/components/common/registerForm";
import MovieForm from "../src/components/common/movieForm";
import Movies from "./components/movies";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NotFound from "./components/notFound";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  return (
    <div>
      <ToastContainer />
      <NavBar />
      <div className="container mx-auto m-5">
        <Switch>
          <Route path="/loginForm" component={LoginForm} />
          <Route path="/registerForm" component={RegisterForm} />
          <Route path="/movies/:id" component={MovieForm} />
          <Route path="/Rentals" component={Rentals} />
          <Route path="/Customers" component={Customers} />
          <Route path="/Movies" component={Movies} />
          <Route path="/notFound" component={NotFound} />
          <Redirect from="/" exact to="/movies" />
          <Redirect to="/notFound" />
        </Switch>
      </div>
    </div>
  );
}

export default App;
