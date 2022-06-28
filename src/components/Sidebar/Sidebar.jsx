import React, { useCallback, useState, useEffect, useRef } from "react";
import Datavis from "../Datavis/Datavis";
import "./Sidebar.scss";

export default function Sidebar({ checked, setChecked, setMoistVis}) {
  const sidebarRef = useRef(null)
  const [isResizing, setIsResizing] = useState(false)
  const [sidebarWidth, setSidebarWidth] = useState(268)
  
  const startResizing = useCallback(() => {
    setIsResizing(true)
}, [])

  const stopResizing = useCallback(() => {
    setIsResizing(false)
}, [])

const resize = useCallback((mouseMoveEvent) => {
    if (isResizing) {
        setSidebarWidth(sidebarRef.current.getBoundingClientRect().right - mouseMoveEvent.clientX)
    }
}, [isResizing])

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
      style={{ width: sidebarWidth}}
      onMouseDown={e => e.preventDefault()}>
        <div className="grabbable"
        onMouseDown={startResizing}>
        </div>
        <Datavis
        checked={checked}
        setChecked={setChecked}
        setMoistVis={setMoistVis}
        ></Datavis>
      </div>
  );
}
