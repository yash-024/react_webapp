import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  auth,
  signInWithEmailAndPassword,
  signInWithGoogle,
} from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Login() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const history = useHistory();

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) history.replace("/");
  }, [user, loading]);
  return (
    <>
      <div className="countiner p-5">
        <div className="row justify-content-center ">
          <div className="col-md-6 ml-5 mr-5">
            <div className="section-title">
              <span>Sign in</span>
              <h2 className="text-center"> Sign in </h2>
            </div>
            <form className="shadow p-4 mt-2">
              <div className="form-group">
                <label htmlFor="Email"> Email Address </label>
                <input
                  type="text"
                  className="form-control"
                  id="Email"
                  placeholder=""
                  value={Email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  aria-autocomplete="false"
                />
              </div>
              <div className="form-group">
                <label htmlFor="Password"> Password </label>
                <input
                  type="password"
                  className="form-control"
                  id="Password"
                  aria-describedby="PasswordHelp"
                  placeholder=""
                  value={Password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
              <button
                disabled={(!Email, !Password)}
                type="submit"
                className="btn btn-primary w-100 my-3 justify-content-center"
                onClick={() => signInWithEmailAndPassword(Email, Password)}
              >
                Submit
              </button>

              {/* <button
                className="btn btn-primary w-100 my-3 justify-content-center"
                onClick={signInWithGoogle}
              >
                Login with Google
              </button> */}

              <div class="d-flex justify-content-center links">
                Don't have an account? &nbsp;<a href="/register"> Sign Up</a>
              </div>
              {/* <div class="d-flex justify-content-center">
                  <a href="#">Forgot your password?</a>
                </div> */}
            </form>
          </div>
          <div className="col-md-6"></div>
        </div>
      </div>
    </>
  );
}
