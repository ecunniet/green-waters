import React from "react";
import Step from "../Step/Step";
import Slider from "../Slider/Slider";
import "./TimeSlider.scss";

export default function TimeSlider({map,checked, moistLayer, stepsYear, stepsMonth, yearMap, setYearMap, monthMap, setMonthMap }) {

    const handleYearChange = (index) => {
        if (map != null)
        {
            if (checked)
            {
                map.removeLayer(moistLayer[yearMap].current)
                map.addLayer(moistLayer[index].current)
            } 
            setYearMap(index);
        }
    };
    
    // const handleMonthChange = (index) => {
    //     setMonthMap(index);
    // };

    return (
        <div className="timeline--container">
            <div className="container">
            <Step currentIndex={yearMap} type={stepsYear}/>
            </div>
            <Slider onChange={handleYearChange}  currentIndex={yearMap} nbmax={6} type='year'/>
            {/* <Slider onChange={handleMonthChange} currentIndex={monthMap} nbmax={11} type='month'/>
            <div className="container">
            <Step currentIndex={monthMap} type={stepsMonth} />
            </div> */}
        </div>
    );
  }