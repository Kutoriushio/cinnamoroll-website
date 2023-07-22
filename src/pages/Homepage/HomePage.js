import React from "react";
import Gallery from "./components/Gallery/Gallery";
import Merchandise from "./components/Merchandise/Merchandise";
import FootBar from "./components/FootBar/FootBar";
import Welcome from "./components/Welcome/Welcome";

export default function Home() {
  return (
    <>
      <div className="main-content">
        <Welcome />
        <Gallery />
        <Merchandise />
      </div>
      <div className="footer">
        <FootBar />
      </div>
    </>
  );
}
