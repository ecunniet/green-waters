import React from "react";
import Step from "../Step/Step";
import Slider from "../Slider/Slider";
import "./TimeSlider.scss";

export default function TimeSlider({ yearMap, setYearMap, monthMap, setMonthMap }) {
    
    const stepsYear = ["2022", "2021", "2020", "2019", "2018", "2017", "2016", "2015"];
    const stepsMouth = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];

    const handleYearChange = (index) => {
        setYearMap(index);
    };
    
    const handleMountChange = (index) => {
        setMonthMap(index);
    };

    return (
        <div className="timeline--container">
            <div className="container">
            <Step currentIndex={yearMap} type={stepsYear}/>
            </div>
            <Slider onChange={handleYearChange}  currentIndex={yearMap} nbmax={7} type='year'/>
            <Slider onChange={handleMountChange} currentIndex={monthMap} nbmax={11} type='month'/>
            <div className="container">
            <Step currentIndex={monthMap} type={stepsMouth} />
            </div>
        </div>
    );
  }