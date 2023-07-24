import React, { useEffect } from "react";
import Gallery from "./components/Gallery/Gallery";
import Merchandise from "./components/Merchandise/Merchandise";
import Welcome from "./components/Welcome/Welcome";

export default function Home() {
  //Back to top when loading a page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="main-content">
        <Welcome />
        <Gallery />
        <Merchandise />
      </div>
    </>
  );
}
