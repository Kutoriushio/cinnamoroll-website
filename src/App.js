import Welcome from "./components/Welcome/Welcome";
import NavigationBar from "./components/Navigation/NavigationBar";
import Gallery from "./components/Gallery/Gallery";

function App() {
  return (
    <div className="App">
      <div className="navigation-placeholder"> </div>
      <NavigationBar />
      <div className="main-content">
        <Welcome />
        <Gallery />
      </div>
    </div>
  );
}

export default App;
