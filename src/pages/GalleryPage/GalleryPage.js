import React, { useEffect, useState } from "react";

export default function GalleryPage() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/gallery/all")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error", error));
  }, []);

  return;
}
