import React, { useEffect, useState } from "react";
import styles from "./UserAvatar.module.css";
import avator from "../../../../images/user_Avatar.jpg";
import { useAuth } from "../../../../context/AuthContext";
import { DownOutlined, UserOutlined, LogoutOutlined } from "@ant-design/icons";

export default function UserAvatar() {
  const { user, handleLogout } = useAuth();
  const [showUserNavSun, setShowUserNavSub] = useState(false);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  function handleClickOutside(e) {
    const userNavSub = document.getElementById("userNavSub"); // get the element
    if (userNavSub && !userNavSub.contains(e.target)) {
      setShowUserNavSub(false);
    }
  }

  return (
    <div
      className={styles.userNav}
      onClick={(e) => {
        e.stopPropagation();
        setShowUserNavSub(!showUserNavSun);
      }}
    >
      <div className={styles.userName}>{user.userName}</div>
      <div className={styles.userAvatar}>
        <img src={avator} alt="avator" />
      </div>
      <DownOutlined className={styles.icon} />
      <div
        id="userNavSub"
        className={`${styles.userNavSub} ${showUserNavSun ? styles.show : ""}`}
      >
        <div className={styles.userNavSubLink}>
          View Account
          <UserOutlined />
        </div>
        <div className={styles.userNavSubLink} onClick={handleLogout}>
          Log out
          <LogoutOutlined />
        </div>
      </div>
    </div>
  );
}
