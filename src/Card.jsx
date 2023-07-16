import React from "react";

export default function Card() {
  return (
    <div className="container">
      <p className="id">ADVICE #117</p>
      <p className="advice">
        `"Advice Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Maiores rem esse,
        rerum officia itaque neque impedit nam cupiditate commodi corporis magni
        inventore"`
      </p>
      <img
        className="divider"
        src="images/pattern-divider-desktop.svg"
        alt="Divider Line"
      />

      <button className="new-advice">
        <img src="/images/icon-dice.svg" alt="Dice for new Advice" />
      </button>
    </div>
  );
}
