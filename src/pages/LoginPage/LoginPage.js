import React, { useState } from "react";
import styles from "./LoginPage.module.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const { handleLoginStatus } = useAuth();

  const navigate = useNavigate();

  async function handleLogin() {
    try {
      const response = await axios.post("http://localhost:8080/user/login", {
        email,
        password,
      });
      if (response.status === 200) {
        handleLoginStatus(email);
        navigate("/");
      } else {
        setMessage(response.data); // Display error response message
      }
    } catch (error) {
      setMessage(error.response.data);
    }
  }

  return (
    <div className={styles.content}>
      <div className={styles.login}>
        <h1>Sign in to Cinnamoroll Website</h1>
        <p style={{ fontSize: "1rem", marginBottom: "1rem", color: "red" }}>
          {message}
        </p>
        <div className={styles.loginForm}>
          <label className={styles.loginLabel}>Email address*</label>
          <input
            className={styles.loginInput}
            placeholder="Email address"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={styles.loginForm}>
          <label className={styles.loginLabel}>Password*</label>
          <input
            className={styles.loginInput}
            placeholder="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className={styles.loginSubmit}>
          <div className={styles.loginButton} onClick={handleLogin}>
            Sign in
          </div>
          <p>Forgot your password?</p>
        </div>
        <p>
          New Customer?
          <Link to="/register" className={styles.link}>
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
