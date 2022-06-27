import React from "react";
import ReactSlider from "react-slider";
import "./Slider.scss";
const Slider = ({ onChange, currentIndex, nbmax}) => {
  return (
    <ReactSlider
      className="vertical-slider"
      markClassName="example-mark"
      onChange={onChange}
      trackClassName="example-track"
      defaultValue={0}
      value={currentIndex}
      min={0}
      max={nbmax}
      marks
      renderMark={(props) => {
        if (props.key < currentIndex) {
          props.className = "example-mark example-mark-completed";
        } else if (props.key === currentIndex) {
          props.className = "example-mark example-mark-active";
        }
        return <span {...props} />;
      }}
      orientation="vertical"
    />
  );
};

export default Slider;