import React, { useState, useEffect, useRef } from "react";
import { Button, Row, Col, Form, Card } from "react-bootstrap";
import { userData } from "../../Confi";
import "./Login.css";

export const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  // const [valid, setValid] = useState("true");
  const [isvalid, setIsvalid] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);
  const eleUserName = useRef();
  const elePassword = useRef();

  useEffect(() => {
    if (username.length >= 5 && password.length >= 6) {
      setIsvalid(false);
      if (
        userData.UserName === username.trim() &&
        userData.Password === password.trim()
      ) {
        setIsSuccess(true);
        localStorage.setItem("Token", userData.Token);
      }
    } else setIsvalid(true);
  }, [username, password]);

  useEffect(() => {
    if (localStorage.getItem("userName")) {
      eleUserName.current.value = localStorage.getItem("userName");
      elePassword.current.focus();
    } else {
      eleUserName.current.focus();
    }
  }, []);
  return (
    <div>
      {isSuccess ? (
        <h4>Successfull Logged in!!</h4>
      ) : (
        <Card className="Login">
          <Row>
            <Col Lg={12}>
              <Form.Control
                type="text"
                onChange={(e) => setUserName(e.target.value)}
                placeholder="UserName"
                ref={eleUserName}
              ></Form.Control>
            </Col>
            <Col lg={12}>
              <Form.Control
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Password"
                ref={elePassword}
              ></Form.Control>
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <Button disabled={isvalid}>Submit</Button>
            </Col>
            <Col lg={6}>
              <Button>Cancel</Button>
            </Col>
          </Row>
          {!isSuccess && !isvalid && <p>Please check userid or password</p>}
        </Card>
      )}
    </div>
  );
};
