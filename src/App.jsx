import "./App.css";
import Card from "./Card";

function App() {
  const handleClick = () => console.log("clicked");

  return (
    <div className="app-container">
      <Card handleClick={handleClick} />
    </div>
  );
}

export default App;
