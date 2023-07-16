import React from "react";

export default function Card(props) {
  return (
    <div className="container">
      <p className="id">ADVICE #{props.sageAdvice.id}</p>
      <p className="advice">"{props.sageAdvice.advice}"</p>
      <img
        className="divider"
        src="src/images/pattern-divider-desktop.svg"
        alt="Divider Line"
      />

      <button className="new-advice" onClick={props.handleClick}>
        <img src="src/images/icon-dice.svg" alt="Dice for new Advice" />
      </button>
    </div>
  );
}
