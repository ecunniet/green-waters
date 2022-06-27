import React from "react";
import './Step.scss';

const Step = ({ currentIndex, type }) => {
  return (
    <div className="steps-container">
      {type.map((step, index) => {
        let color = currentIndex === index ? "white" : "black";
        console.log("color", color);
        return (
          <div className="steps-item">
            <h3
              style={{
                margin: 0,
                color: color,
                fontSize: 12
              }}
            >
              {step}
            </h3>
          </div>
        );
      })}
    </div>
  );
};

export default Step;