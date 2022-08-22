import { Link } from "@remix-run/react";
import React from "react";
import type { AxisOptions } from "react-charts";
import { Chart } from "react-charts";
import { ArrowLeft } from "react-feather";

type DailyStars = {
  date: Date;
  stars: number;
};

type Series = {
  label: string;
  data: DailyStars[];
};

type MyDatum = { date: Date; stars: number };

function MyChart() {
  const data = [
    {
      label: "React Charts",
      data: [
        {
          date: new Date(2020, 0, 1),
          stars: 23467238,
        },
        {
          date: new Date(2021, 0, 1),
          stars: 83467238,
        },
      ],
    },
    {
      label: "Second Thing",
      data: [
        {
          date: new Date(2020, 0, 1),
          stars: 43467238,
        },
        {
          date: new Date(2021, 0, 1),
          stars: 66467238,
        },
      ],
    },
  ];

  const primaryAxis = React.useMemo(
    (): AxisOptions<MyDatum> => ({
      getValue: (datum) => datum.date,
    }),
    []
  );

  const secondaryAxes = React.useMemo(
    (): AxisOptions<MyDatum>[] => [
      {
        getValue: (datum) => datum.stars,
      },
    ],
    []
  );

  return (
    <>
      <Link to="/">
        <ArrowLeft size={20} />
      </Link>
      <h4>
        Current Stable(2.0.0) produces{" "}
        <a href="https://github.com/TanStack/react-charts/issues/133">
          this issue
        </a>
        <br />
        Most recent release (3.0.0-beta(~30 - current)) introduces{" "}
        <a
          href="https://github.com/TanStack/react-charts/issues/304"
          target="_blank"
          rel="noreferrer"
        >
          this issue
        </a>
        <br />
        Currently running beta v25
      </h4>
      <div style={{ height: 500 }}>
        <Chart
          options={{
            data,
            primaryAxis,
            secondaryAxes,
          }}
        />
      </div>
    </>
  );
}

export default MyChart;
