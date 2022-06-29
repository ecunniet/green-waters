import React, { useCallback, useState, useEffect, useRef } from "react";
import Datavis from "../Datavis/Datavis";
import "./Sidebar.scss";

export default function Sidebar({ map, moistLayer, stepsYear, stepsMonth, yearMap, monthMap, checked, setChecked, setMoistVis, sidebarWidth, setSidebarWidth, isResizing, setIsResizing}) {
  const sidebarRef = useRef(null)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  const startResizing = useCallback(() => {
    setWindowWidth(window.innerWidth)
    setIsResizing(true)
}, [setIsResizing])

  const stopResizing = useCallback(() => {
    if (isResizing){
      setIsResizing(false)
      if (sidebarWidth){
        document.getElementById("divmap").style.width = (100-sidebarWidth)+'%';
      }
    }
}, [setIsResizing, sidebarWidth, isResizing])

const resize = useCallback((mouseMoveEvent) => {
  if (isResizing) {
    setSidebarWidth((sidebarRef.current.getBoundingClientRect().right - mouseMoveEvent.clientX) * 100 / windowWidth)
    if (sidebarWidth)
    {
      document.getElementById("divmap").style.width = (100-sidebarWidth)+'%';
    }
  }
}, [isResizing, windowWidth, sidebarWidth, setSidebarWidth])

useEffect(() => {
    window.addEventListener("mousemove", resize)
    window.addEventListener("mouseup", stopResizing)
    return () => {
        window.removeEventListener("mousemove", resize)
        window.removeEventListener("mouseup", stopResizing)
    }
}, [resize, stopResizing])

  return (
      <div id='sidebar'
      ref={sidebarRef}
      style={{ width: sidebarWidth+'%'}}
      onMouseDown={e => e.preventDefault()}>
        <div className="grabbable"
        onMouseDown={startResizing}>
        </div>
        <Datavis
        map={map}
        moistLayer={moistLayer}
        stepsYear={stepsYear}
        stepsMonth={stepsMonth}
        yearMap={yearMap}
        monthMap={monthMap}
        checked={checked}
        setChecked={setChecked}
        setMoistVis={setMoistVis}
        ></Datavis>
      </div>
  );
}
