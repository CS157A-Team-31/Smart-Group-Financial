import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  BrowserRouter as Router,
  Redirect,
  withRouter
} from "react-router-dom";

import { attemptRegister } from "../actions/register/registerApiCall";

import Register from "../components/auth/Register.js";

class RegisterPage extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onClick = e => {
    e.preventDefault();

    this.props.attemptRegister({
      email: this.state.email,
      password: this.state.password
    });
  };

  render() {
    const errors = { ...this.state.errors };
    const email = { ...this.state.email };
    const password = { ...this.state.password };
    const user = this.props.user || {};
    const { userID } = user;
<<<<<<< HEAD

    return user.email && userID ? (
=======
    console.log("UserID: " + userID);

    return userID ? (
>>>>>>> More UI
      <Redirect to="/home" />
    ) : (
      <Register
        onChange={e => this.onChange(e)}
        onClick={e => this.onClick(e)}
        email={email}
        password={password}
        errors={errors}
      />
    );
  }
}

// Store
function mapStateToProps(state) {
  return {
    user: state.user
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ attemptRegister }, dispatch);
}

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(withRouter(RegisterPage));
