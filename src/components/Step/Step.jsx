import React from "react";

const Step = ({ currentIndex, type }) => {
  return (
    <div className="steps-container">
      {type.map((step, index) => {
        let color = currentIndex === index ? "#00d4ff" : "black";
        console.log("color", color);
        return (
          <div className="steps-item">
            <h3
              style={{
                margin: 0,
                color: color
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