import React, { useEffect, useState } from "react";
import styles from "./NavTable.module.css";
import navIcon from "../../../images/nav_icon.svg";
import { useNavigate } from "react-router-dom";

export default function NavTable() {
  const [isShown, setIsShown] = useState(true);
  const navigate = useNavigate();

  // Show or hide the navigation table
  function toggleVisibility() {
    setIsShown(!isShown);
  }

  function scrollToTargetPosition(targetId) {
    // get anchor point
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      // get the position of anchor point
      const targetPosition = targetElement.getBoundingClientRect().top;
      // 64 means the height of the navgation bar
      const scrollPosition = targetPosition + window.scrollY - 64;

      window.scroll({
        top: scrollPosition,
        behavior: "smooth",
      });
    }
  }

  useEffect(() => {
    function handleInitialScroll() {
      // get the the word after hash(#)
      const hash = window.location.hash.substring(1);
      if (hash) {
        scrollToTargetPosition(hash);
      }
    }
    handleInitialScroll();
    // Add an event listener for hashchange event to handle changes in the URL hash
    window.addEventListener("hashchange", handleInitialScroll);
    //Add an event listener for loading event to handle refreshing the page
    window.addEventListener("load", handleInitialScroll);
    return () => {
      // Clean up event listeners when the component is unmounted to prevent memory leaks
      window.removeEventListener("hashchange", handleInitialScroll);
      window.removeEventListener("load", handleInitialScroll);
    };
  }, []);

  function scrollToTarget(targetId) {
    scrollToTargetPosition(targetId);
    // change the url
    navigate(`#${targetId}`);
  }

  return (
    <div className={styles.navTable}>
      <div className={styles.navTitle}>
        <img src={navIcon} alt="icon" />
        <h2>Content</h2>
        <span className={styles.toggleButton}>
          {isShown ? (
            <span onClick={toggleVisibility} tabIndex="0">
              hide
            </span>
          ) : (
            <span onClick={toggleVisibility} tabIndex="0">
              show
            </span>
          )}
        </span>
      </div>
      <ul className={isShown ? styles.navList : styles.hidden}>
        <li onClick={() => scrollToTarget("Story")}>
          <div>Story</div>
        </li>
        <li onClick={() => scrollToTarget("History")}>
          <div>History</div>
        </li>
        <li onClick={() => scrollToTarget("Media")}>
          <div>Media</div>
          <ul className={styles.nestList}>
            <li
              onClick={(e) => {
                e.stopPropagation(); // stop event propagation
                scrollToTarget("Manga");
              }}
            >
              Manga
            </li>
            <li
              onClick={(e) => {
                e.stopPropagation();
                scrollToTarget("TV_/_Movies");
              }}
            >
              TV/Movies
            </li>
            <li
              onClick={(e) => {
                e.stopPropagation();
                scrollToTarget("Music");
              }}
            >
              Music
            </li>
          </ul>
        </li>
        <li onClick={() => scrollToTarget("Trivia")}>
          <div>Trivia</div>
        </li>
        <li onClick={() => scrollToTarget("Sources")}>
          <div>Sources</div>
        </li>
      </ul>
    </div>
  );
}
