import React, {useMemo} from "react";
import { Chart } from 'react-charts'
 

export default function Charts({elementType, interactionMode, setIndex, activeDatumIndex, activeSeriesIndex, checked}){

    const data = [
        {
          label: 'Series 1',
          data: [
            {
              year: "2016",
              mean: 49.39933526754563
            },
            {
              year: "2017",
              mean: 49.53384679965688
            },
            {
              year: "2018",
              mean: 52.492528628412536
            },
            {
              year: "2019",
              mean: 43.60676886414152
            },
            {
              year: "2020",
              mean: 17.56324098897826
            },
            {
              year: "2021",
              mean: 50.51404210779819
            },
            {
              year: "2022",
              mean: 49.50463554913957
            }
          ]
      },{
        label: 'Series 2',
        data: [
          {
            year: "2016",
            mean: 23.39933526754563
          },
          {
            year: "2017",
            mean: 30.53384679965688
          },
          {
            year: "2018",
            mean: 49.492528628412536
          },
          {
            year: "2019",
            mean: 51.60676886414152
          },
          {
            year: "2020",
            mean: 48.56324098897826
          },
          {
            year: "2021",
            mean: 6.51404210779819
          },
          {
            year: "2022",
            mean: 36.50463554913957
          }
        ]
    },{
      label: 'Series 3',
      data: [
        {
          year: "2016",
          mean: 49.39933526754563
        },
        {
          year: "2017",
          mean: 49.53384679965688
        },
        {
          year: "2018",
          mean: 49.492528628412536
        },
        {
          year: "2019",
          mean: 4.60676886414152
        },
        {
          year: "2020",
          mean: 49.56324098897826
        },
        {
          year: "2021",
          mean: 49.51404210779819
        },
        {
          year: "2022",
          mean: 49.50463554913957
        }
      ]
  }
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
                color: `url(#${series.index % 4})`,
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
              </defs>
            ),
          }}
     />
    )
}