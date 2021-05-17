import React from "react";
import axios from "axios/index";
import { Link, useHistory } from "react-router-dom";
import Cookies from "js-cookie";
import { API_BASE_URL } from "../constants/apiConstants";

function SignOut() {
  let history = useHistory();
  let session_id = Cookies.get("session_id");

  function signOut() {
    axios
      .get("localhost:8303/signout", {
        headers: {
          session_id: session_id,
          "Content-Type": "application/json",
        },
      })
      .then(
        (Response) => {
          if (Response.status === 200) {
            Cookies.remove();
            // history.push(`${API_BASE_URL}"/SignUp"`);
          }
        },
        (Error) => console.log(Error.status)
      );
  }

  return <button onClick={signOut}>Sign Out</button>;
}

export default SignOut;
