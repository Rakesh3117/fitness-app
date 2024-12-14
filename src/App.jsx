import "./App.css";
import Navbar from "./components/Navbar";
import Workout from "./pages/Workout";

function App() {
  return (
    <div>
      <div className="app-container-manual">
        <Navbar />
      </div>
      <Workout />
    </div>
  );
}

export default App;
