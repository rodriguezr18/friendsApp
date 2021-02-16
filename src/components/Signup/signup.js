import React from "react";

function SignUp(props) {
  return (
    <div className="col-md-4">
      <div className="card text-center bg-light mb-3 signUpCard">
        <div className="card-body">
          <h2 className="display-5">
            Sign Up<i className="fas fa-rocket"></i>
          </h2>
          <p className="lead">Get started!</p>
          <form>
            {props.state.inputBlank && (
              <p className="empty-input-error">Please fill out all inputs</p>
            )}
            <div className="form-group">
              <label htmlFor="Fullname-text"></label>
              <input
                type="text"
                name="fullname"
                id="fullname-text"
                placeholder="Full Name"
                className={
                  props.state.inputBlank || props.state.incorrectLogin
                    ? "form-control input-error"
                    : "form-control"
                }
                value={props.state.fullName}
                onChange={event => props.handleChangeFullName(event)}
              ></input>
            </div>
            <div className="form-group">
              <label htmlFor="Username-text"></label>
              <input
                type="text"
                name="username"
                id="username-text"
                placeholder="Username"
                className={
                  props.state.inputBlank || props.state.incorrectLogin
                    ? "form-control input-error"
                    : "form-control"
                }
                value={props.state.username}
                onChange={event => props.handleChangeUsername(event)}
              ></input>
            </div>
            <div className="form-group">
              <label htmlFor="Password-Text"></label>
              <input
                type="password"
                name="password"
                id="password-text"
                placeholder="New Password"
                className={
                  props.state.inputBlank || props.state.incorrectLogin
                    ? "form-control input-error"
                    : "form-control"
                }
                value={props.state.password}
                onChange={event => props.handleChangePassword(event)}
              ></input>
            </div>
            <button
              className="btn btn-success btn-block"
              id="submit-registration"
              onClick={props.handleNewUser}
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;