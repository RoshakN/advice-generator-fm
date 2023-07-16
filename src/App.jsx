import { useState } from "react";
import "./App.css";
import Card from "./Card";
import Axios from "axios";

function App() {
  const [sageAdvice, setSageAdvice] = useState({
    id: 217,
    advice: "Identify sources of happiness.",
  });
  const handleClick = () => {
    Axios.get("https://api.adviceslip.com/advice").then((res) => {
      setSageAdvice(res.data.slip);
      console.log(sageAdvice);
    });
  };

  // useEffect(() => {
  //   Axios.get("https://api.adviceslip.com/advice").then((res) => {
  //     setSageAdvice(res.data.slip.advice);
  //     console.log(sageAdvice);
  //   });
  // }, []);

  return (
    <div className="app-container">
      <Card handleClick={handleClick} sageAdvice={sageAdvice} />
    </div>
  );
}

export default App;
