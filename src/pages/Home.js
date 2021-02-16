import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "../css/main.css";
import axios from "axios";
import Nav from "../components/Nav/nav";
import JumbotronHome from "../components/JumbotronHome/jumbotronHome.js";
import Login from "../components/Login/login";
import SignUp from "../components/Signup/signup";
import Welcome from "../components/Welcome/welcome";


class Home extends Component {
  state = {
    collapsed: false,
    loggedIn: false,
    inputBlank: false,
    incorrectLogin: false,
    showLoginComponent: true,
    loginUser: "",
    loginPassword: "",
    fullName: "",
    username: "",
    password: "",
    profile_pic: ""
  };

  handleChangeLoginUser(event) {
    this.setState({ loginUser: event.target.value });
  }

  handleChangeLoginPassword(event) {
    this.setState({ loginPassword: event.target.value });
  }

  handleChangeFullName(event) {
    this.setState({ fullName: event.target.value });
  }

  handleChangeUsername(event) {
    this.setState({ username: event.target.value });
  }

  handleChangePassword(event) {
    this.setState({ password: event.target.value });
  }

  useLocalStorage = localItem => {
    localStorage.setItem("user", localItem);
    this.setState({ loggedIn: true });
  };

  displaySignUpComponent = event => {
    event.preventDefault();
    this.setState({ showLoginComponent: false });
    console.log(this.state);
  };

  displayLoginComponent = event => {
    event.preventDefault();
    this.setState({ showLoginComponent: true });
    console.log(this.state);
  };

  handleLogin(event) {
    event.preventDefault();
    if (this.state.loginUser === "" || this.state.loginPassword === "") {
      this.setState({ inputBlank: true });
    } else {
      axios
        .get(`http://localhost:4000/api/user/${this.state.loginUser}/${this.state.loginPassword} `)
        .then(response => {
          this.setState({ incorrectLogin: false, inputBlank: false });
          const user = {
            id: response.data.id,
            userName: response.data.user_name
          };
          this.useLocalStorage(JSON.stringify(user));
        })
        .catch(
          function(error) {
            this.setState({ incorrectLogin: true, inputBlank: false });
          }.bind(this)
        );
    }
  }

  bypassLogin = (event) => {
    event.preventDefault();
    console.log('button pressed')
    this.setState({ loggedIn: true });
  };

  handleNewUser(event) {
    event.preventDefault();
    const data = {
      fullName: this.state.fullName,
      username: this.state.username,
      password: this.state.password
    };
    if (data.fullName === "" || data.username === "" || data.password === "") {
      this.setState({ inputBlank: true });
    } else {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      };
      fetch("/api/newUser", options).then(response => {
        axios
          .get(`/api/user/${data.username}/${data.password} `)
          .then(response => {
            const user = {
              id: response.data.id,
              fullName: response.data.fullName,
              userName: response.data.username
            };
            response.data
              ? this.useLocalStorage(JSON.stringify(user))
              : this.setState({ loggedIn: false });
          });
      });
    }
  }

  toggleBurger = () => {
    const collapsed = !this.state.collapsed;
    this.setState({ collapsed });
  };

  render() {
    if (this.state.loggedIn === true) {
      return <Redirect to="/profile" />;
    }

    const burgerClass = this.state.collapsed ? "active-burger" : "";
    const showUl = this.state.collapsed ? "showUl" : "";

    this.handleChangeFullName = this.handleChangeFullName.bind(this);
    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleChangeLoginUser = this.handleChangeLoginUser.bind(this);
    this.handleChangeLoginPassword = this.handleChangeLoginPassword.bind(this);

    this.handleNewUser = this.handleNewUser.bind(this);
    this.handleLogin = this.handleLogin.bind(this);

    return (
      <div className="home-wrapper">
        <Nav
          toggleBurger={this.toggleBurger}
          burgerClass={burgerClass}
          showUl={showUl}
          storageClear={this.storageClear}
        >
          <a className="btn" href="/">
            Home
          </a>
          <a
            className="btn"
            href={this.state.loggedIn ? "/profile" : ""}
            onClick={
              this.state.showLoginComponent
                ? event => this.displaySignUpComponent(event)
                : event => this.displayLoginComponent(event)
            }
          >
            {this.state.showLoginComponent ? "Sign Up" : "Sign In"}
          </a>
        </Nav>
        <JumbotronHome>
          <Welcome>
          </Welcome>
          {this.state.showLoginComponent ? (
            <Login
              state={this.state}
              handleChangeLoginUser={this.handleChangeLoginUser}
              handleChangeLoginPassword={this.handleChangeLoginPassword}
              handleLogin={this.handleLogin}
              displaySignUpComponent={this.displaySignUpComponent}
              // bypassLogin = {this.bypassLogin}
            />
          ) : (
            <SignUp
              state={this.state}
              handleChangeFullName={this.handleChangeFullName}
              handleChangeUsername={this.handleChangeUsername}
              handleChangePassword={this.handleChangePassword}
              handleNewUser={this.handleNewUser}
            />
          )}
        </JumbotronHome>
      </div>
    );
  }
}

export default Home;