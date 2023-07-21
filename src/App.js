import Welcome from "./main/Welcome/Welcome";
import NavigationBar from "./main/Navigation/NavigationBar";
import Gallery from "./main/Gallery/Gallery";
import Merchandise from "./main/Merchandise/Merchandise";
import FootBar from "./main/FootBar/FootBar";
function App() {
  return (
    <div className="App">
      <NavigationBar />
      <div className="main-content">
        <Welcome />
        <Gallery />
        <Merchandise />
      </div>
      <div className="footer">
        <FootBar />
      </div>
    </div>
  );
}

export default App;
