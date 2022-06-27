import React from "react";
import ReactSlider from "react-slider";
import "./Slider.scss";
const Slider = ({ onChange, currentIndex, nbmax, type}) => {
  return (
    <ReactSlider
      className="vertical-slider"
      markClassName={type === 'year' ? "example-mark" : "example-mark--month" }
      onChange={onChange}
      trackClassName="example-track"
      defaultValue={0}
      value={currentIndex}
      min={0}
      max={nbmax}
      marks
      renderMark={(props) => {
        if (props.key < currentIndex) {
          props.className = (type === 'year' ? "example-mark example-mark-completed" : "example-mark example-mark-completed--month");
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