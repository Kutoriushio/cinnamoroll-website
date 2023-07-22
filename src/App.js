import NavigationBar from "./pages/Homepage/components/Navigation/NavigationBar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Homepage/HomePage";
import GalleryPage from "./pages/GalleryPage/GalleryPage";
import IntroducePage from "./pages/IntroducePage/IntoducePage";
import ShopPage from "./pages/ShopPage/ShopPage";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/introduce" element={<IntroducePage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/shop" element={<ShopPage />} />
      </Routes>
    </div>
  );
}

export default App;
