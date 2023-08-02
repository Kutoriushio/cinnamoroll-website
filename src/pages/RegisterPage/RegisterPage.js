import React, { useState } from "react";
import styles from "./RegisterPage.module.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function RegisterPage() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const { handleLoginStatus } = useAuth();
  const navigate = useNavigate();

  async function handleRegister() {
    try {
      const response = await axios.post("http://localhost:8080/user/register", {
        userName,
        email,
        password,
      });
      // if register sucessfully, auto login and navigate to the home page
      if (response.status === 200) {
        handleLoginStatus(email);
        navigate("/");
      } else {
        setMessage(response.data); // Display response message
      }
    } catch (error) {
      setMessage(error.response.data);
    }
  }
  return (
    <div className={styles.content}>
      <div className={styles.register}>
        <h1>Create Account</h1>
        <p style={{ fontSize: "1rem", marginBottom: "1rem", color: "red" }}>
          {message}
        </p>
        <div className={styles.registerForm}>
          <label className={styles.registerLabel}>User name*</label>
          <input
            className={styles.registerInput}
            placeholder="User name"
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className={styles.registerForm}>
          <label className={styles.registerLabel}>Email address*</label>
          <input
            className={styles.registerInput}
            placeholder="Emaik address"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={styles.registerForm}>
          <label className={styles.registerLabel}>Password*</label>
          <input
            className={styles.registerInput}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className={styles.registerSubmit}>
          <div className={styles.registerButton} onClick={handleRegister}>
            Sign up
          </div>
          <p>* Indicates a required field</p>
        </div>
        <p>
          Already have an account?
          <Link to="/login" className={styles.link}>
            {" "}
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
