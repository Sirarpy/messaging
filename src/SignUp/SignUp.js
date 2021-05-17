import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./SignUp.css";
// import logo from "./../img/logo.png";

import { Link, useHistory } from "react-router-dom";
import TermsModal from "./TermsModal";
import PolicyModal from "./PolicyModal";
import { useForm } from "react-hook-form";
import axios from "axios";
// import { sha256 } from "js-sha256";
// import { API_BASE_URL } from "../constants/apiConstants";

export function SignUp(props) {
  const { register, handleSubmit, errors, watch, setError } = useForm({
    mode: "onChange",
  });
  let history = useHistory();

  const onSubmit = (data) => {

    axios
      .post("http://localhost:8303/signup", {
        firstName: data.firstName,
        lastName: data.lastName,
        mail: data.email,
        password: data.password,
      })
      .then(
        (response) => {
          if (response.status === 200) {
            history.push("/SignIn");
          }
          console.log(response.data);
        },
        (error) => {
          if (error.response.status === 409) {
            setError("email", { message: "Email is already used" });
          }
          console.log(error);
        }
      );
   
  };

  return (
    <Container fluid className={"SignUP"}>
      <Row>
        <Col lg={"7"} md={"7"} className={"p-0"}>
          <div className={"bgSignUp"}>
            {/* <div className={"logoWrap"}>
              <img src={logo} alt="" />
            </div> */}
            <div className={"headerLeftText"}>
              {/* <h1>Lorem Ipsum </h1> */}
              {/* <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Consequuntur ex officia officiis possimus.
              </p> */}
            </div>
          </div>
        </Col>
        <Col lg={"5"} md={"5"} className={"p-0"}>
          <div className={"headerRightText"}>
            <div>
              <h2>Sign Up</h2>
            </div>
            <div>
              <form
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                autoComplete="off"
                method={"post"}
              >
                <Row>
                  <Col lg={12}>
                    <input
                      ref={register({
                        required: "First Name is required",
                        minLength: {
                          value: 2,
                          message: "Min length 2 character.",
                        },
                        maxLength: {
                          value: 50,
                          message: "Max length 50 character.",
                        },
                        // ,
                        // validate: (value) => {
                        //     return (
                        //         [/(A-Za-z)/].every(pattern => pattern.test(value)) ||
                        //         "Invalid First Name."
                        //     )
                        // }
                      })}
                      name={"firstName"}
                      className={"input"}
                      type="text"
                      placeholder={"First Name"}
                    />
                  </Col>
                </Row>
                {errors.firstName ? (
                  <span>{errors.firstName.message}</span>
                ) : null}

                <Row>
                  <Col lg={12}>
                    <input
                      ref={register({
                        required: "Last Name is required",
                        minLength: {
                          value: 2,
                          message: "Min length 2 character.",
                        },
                        maxLength: {
                          value: 50,
                          message: "Max length 50 character.",
                        },
                        // ,
                        // validate: (value) => {
                        //     return (
                        //         [/(A-Za-z)/].every(pattern => pattern.test(value)) ||
                        //         "Invalid Last Name."
                        //     )
                        // }
                      })}
                      name={"lastName"}
                      className={"input"}
                      type="text"
                      placeholder={"Last Name"}
                    />
                  </Col>
                </Row>
                {errors.lastName ? (
                  <span>{errors.lastName.message}</span>
                ) : null}

                <Row>
                  <Col lg={12}>
                    <input
                      ref={register({
                        required: "Email is required",
                        minLength: {
                          value: 4,
                          message: "Min length 4 character.",
                        },
                        maxLength: {
                          value: 50,
                          message: "Max length 50 character.",
                        },
                        validate: (value) => {
                          return (
                            [
                              /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
                            ].every((pattern) => pattern.test(value)) ||
                            "Invalid email."
                          );
                        },
                      })}
                      name={"email"}
                      className={"input"}
                      type="email"
                      placeholder={"Email"}
                    />
                  </Col>
                </Row>
                {errors.email ? <span>{errors.email.message}</span> : null}
                <br />
                <Row>
                  <Col lg={12}>
                    <input
                      ref={register({
                        required: "Password is required",
                        minLength: {
                          value: 8,
                          message: "Min length 8 character.",
                        },
                        maxLength: {
                          value: 20,
                          message: "Max length 20 character.",
                        },
                        validate: (value) => {
                          return (
                            [
                              /^((?!.*[\s])(?=.*[A-Z])(?=.*[a-z])(?=.*\d))/,
                            ].every((pattern) => pattern.test(value)) ||
                            "The password must contain uppercase, lowercase and number."
                          );
                        },
                      })}
                      name={"password"}
                      className={"input"}
                      type="password"
                      placeholder={"Password"}
                    />
                  </Col>
                </Row>
                {errors.password ? (
                  <span>{errors.password.message}</span>
                ) : null}
                <br />
                <Row>
                  <Col lg={12}>
                    <input
                      ref={register({
                        required: "Confirm Password is required",
                        validate: (value) =>
                          value === watch("password")
                            ? null
                            : "Do not match passwords",
                      })}
                      name={"confirmPassword"}
                      className={"input"}
                      type="password"
                      placeholder={"Confirm Password"}
                    />
                  </Col>
                </Row>

                {errors.confirmPassword ? (
                  <span>{errors.confirmPassword.message}</span>
                ) : null}
                <br />
                <Row>
                  <Col lg={12} className={"d-flex agreeToRules"}>
                    <label className={"m-0"}>
                      <input
                        ref={register({
                          required: "Are you agree",
                        })}
                        name={"checkedBtn"}
                        type="checkbox"
                      />
                      I accept the
                    </label>
                    <TermsModal title={"Terms of Use"} /> &
                    <PolicyModal title={"Privacy Policy"} />
                  </Col>
                </Row>

                {errors.checkedBtn ? (
                  <span>{errors.checkedBtn.message}</span>
                ) : null}
                <br />
                <br />
                <input className={"input"} type="submit" value="Sign Up" />
              </form>
            </div>
            <div className={"signUpWraper text-center mt-3"}>
              <p className="forSignInLink">
                Already have an account?
                <Link to="/SignIn"> Sign In</Link>
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
