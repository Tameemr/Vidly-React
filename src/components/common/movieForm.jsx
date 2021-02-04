import React from "react";
import Joi from "joi-browser";
import Form from "../common/form";
import { genres } from "./../../services/fakeGenreService";
class MovieForm extends Form {
  state = {
    data: {
      title: "",
      genreid: "",
      numberInStock: "",
      dailyRentalRate: "",
    },
    genres: [],
    errors: {},
  };

  schema = {
    title: Joi.string().required().label("Title"),
    genre: Joi.string().required().label("Genre"),
    numberInStock: Joi.string().required().label("Number in Stock"),
    dailyRentalRate: Joi.string().required().label("Rate"),
  };

  doSubmit = () => {
    console.log("Submitted");
    this.props.history.push("/movies");

    this.setState((prevState) => ({
      myArray: [...prevState.myArray, { data: "object" }],
    }));
  };

  render() {
    return (
      <div>
        <h1>Movie Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title")}
          {this.renderInput("genre", "Genre")}
          {this.renderInput("numberInStock", "Number in Stock")}
          {this.renderInput("dailyRentalRate", "Rate")}
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default MovieForm;
