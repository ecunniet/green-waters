import React, {useMemo} from "react";
import { Chart } from 'react-charts'
 

export default function Charts({error, isLoaded, items, elementType, interactionMode, setIndex, activeDatumIndex, activeSeriesIndex}){

  const data = [
    {
      label: 'Moisture Levels (en pourcentage)',
      data:items
    },
  ]
      const primaryAxis = useMemo(
        () => ({
          getValue: (datum) => datum.year,
        }),
        []
      )
      const secondaryAxes = useMemo(
        () => [
          {
            getValue: (datum) => datum.mean,
            elementType,
          },
        ],
        [elementType]
      )
    
      if (error) {
        return <div>Erreur : {error.message}</div>;
      } else if (!isLoaded) {
        return <div style={{textAlign:'center', marginTop:'50%'}}>Chargement...</div>;
      } else {
        console.log('data passed to chart : ' + JSON.stringify(data))
    return(
          <Chart
           options={{
            data,
            interactionMode,
            primaryAxis,
            secondaryAxes,
            getDatumStyle: (datum, status) =>
              (activeDatumIndex === datum.index &&
              activeSeriesIndex === datum.seriesIndex
                ? {
                    opacity: 1,
                    circle: {
                      r: 5,
                    },
                    rectangle: {
                      stroke: "black",
                      strokeWidth: 3,
                    },
                  }
                : activeDatumIndex === datum.index
                ? {
                    opacity: 1,
                    circle: {
                      r: 3,
                    },
                    rectangle: {
                      stroke: "black",
                      strokeWidth: 1,
                    },
                  }
                : datum.seriesIndex === activeSeriesIndex
                ? {
                    circle: {
                      r: 3,
                    },
                    rectangle: {
                      stroke: "black",
                      strokeWidth: 1,
                    },
                  }
                : status === "groupFocused"
                ? {
                    circle: {
                      r: 2,
                    },
                    rectangle: {
                      stroke: "black",
                      strokeWidth: 0,
                    },
                  }
                : {
                    circle: {
                      r: 2,
                    },
                    rectangle: {
                      stroke: "black",
                      strokeWidth: 0,
                    },
                  }),
            getSeriesStyle: (series) => {
              return {
                color: `url(#${series.index % 7})`,
                opacity:
                  activeSeriesIndex > -1
                    ? series.index === activeSeriesIndex
                      ? 1
                      : 0.3
                    : 1,
              };
            },
            onFocusDatum: (focused) =>
            setIndex({
                activeSeriesIndex: focused ? focused.seriesIndex : -1,
                activeDatumIndex: focused ? focused.index : -1,
              }),

            renderSVG: () => (
              <defs>
                <linearGradient id="0" x1="0" x2="0" y1="1" y2="0">
                  <stop offset="0%" stopColor="#17EAD9" />
                  <stop offset="100%" stopColor="#6078EA" />
                </linearGradient>
                <linearGradient id="1" x1="0" x2="0" y1="1" y2="0">
                  <stop offset="0%" stopColor="#ff8f10" />
                  <stop offset="100%" stopColor="#ff3434" />
                </linearGradient>
                <linearGradient id="2" x1="0" x2="0" y1="1" y2="0">
                  <stop offset="0%" stopColor="#42E695" />
                  <stop offset="100%" stopColor="#3BB2B8" />
                </linearGradient>
                <linearGradient id="3" x1="0" x2="0" y1="1" y2="0">
                  <stop offset="0%" stopColor="#ffb302" />
                  <stop offset="100%" stopColor="#ead700" />
                </linearGradient>
                 {/* chosen by me */}
                <linearGradient id="4" x1="0" x2="0" y1="1" y2="0">
                  <stop offset="0%" stopColor="#d21c4e" />
                  <stop offset="100%" stopColor="#ffdb17" />
                </linearGradient>
                 <linearGradient id="5" x1="0" x2="0" y1="1" y2="0">
                  <stop offset="0%" stopColor="#fc4217" />
                  <stop offset="100%" stopColor="#c200fb" />
                </linearGradient>
                <linearGradient id="6" x1="0" x2="0" y1="1" y2="0">
                  <stop offset="0%" stopColor="#00ffa6" />
                  <stop offset="100%" stopColor="#0019ff" />
                </linearGradient>
              </defs>
            ),
          }}
     />
    );
  }
}