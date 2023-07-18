import React from "react";
import introduction from "../../images/introduction.png";
import "./Welcome.css";

export default function Welcome() {
  return (
    <div className="welcome-content">
      <div className="introduction-content">
        <h1 className="welcome-title"> Welcome to Cinnamoroll's home!</h1>
        <p className="introduce">
          Cinnamoroll is a Sanrio character and a member of the Cinnamoroll
          universe. He was born on March 6th, on a cloud far up in the sky. He
          is a small, shy and chubby boy dog with white fur, blue eyes, pink
          cheeks, a plump and curly tail that resembles a cinnamon roll (hence
          his name), and long ears that enable him to fly. Cinnamon is shy but
          friendly, and always wants to help out his friends when they need it.
          He works at café cinnamon, and sometimes sleeps on customers laps.
          Cinnamon's favorite food is warm, fresh cinnamon rolls.
        </p>
        <div className="button">Check More</div>
      </div>
      <img alt="welcome-img" src={introduction} />
    </div>
  );
}
