import React from "react";

function Login(props) {
  return (
    <div className="col-md-4">
      <div className="card text-center bg-light mb-3 loginCard">
        <div className="card-body">
          <h5 className="card-title">
            Launch into SS<i className="fas fa-rocket"></i>
          </h5>
          <form>
            {props.state.inputBlank && <p className="empty-input-error">Please fill out all inputs</p>}
            {props.state.incorrectLogin && <p className="incorrect-login">Username or password are incorrect</p>}
            <div className="form-group">
              <label htmlFor="username"></label>
              <input
                type="text"
                className={
                  props.state.inputBlank || props.state.incorrectLogin
                    ? "form-control input-error"
                    : "form-control"
                }
                id="username"
                placeholder="Username"
                value={props.state.loginUser}
                onChange={event => props.handleChangeLoginUser(event)}
              ></input>
            </div>
            <div className="form-group">
              <label htmlFor="password"></label>
              <input
                type="password"
                // className="form-control"
                className={
                  props.state.inputBlank || props.state.incorrectLogin
                    ? "form-control input-error"
                    : "form-control"
                }
                id="password"
                placeholder="Password"
                value={props.state.loginPassword}
                onChange={event => props.handleChangeLoginPassword(event)}
              ></input>
            </div>
            <button
              type="submit"
              className="btn btn-primary btn-block"
              id="login-btn"
              onClick={
                props.handleLogin
                // props.bypassLogin
              }
            >
              Login
            </button>
            <div className="separator">OR</div>
            <button
              className="btn btn-success btn-block"
              onClick={props.displaySignUpComponent}
            >
              Create New User
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;