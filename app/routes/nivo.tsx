import { ResponsiveLine } from "@nivo/line";
import { Link } from "@remix-run/react";
import { ArrowLeft } from "react-feather";
import { data } from "~/data/data";

const MyResponsiveLine = ({ data }: any) => (
  <ResponsiveLine
    data={data}
    margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
    xScale={{ type: "point" }}
    yScale={{
      type: "linear",
      min: "auto",
      max: "auto",
      stacked: true,
      reverse: false,
    }}
    yFormat=" >-.2f"
    axisTop={null}
    axisRight={null}
    axisBottom={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "transportation",
      legendOffset: 36,
      legendPosition: "middle",
    }}
    axisLeft={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "count",
      legendOffset: -40,
      legendPosition: "middle",
    }}
    pointSize={10}
    pointColor={{ theme: "background" }}
    pointBorderWidth={2}
    pointBorderColor={{ from: "serieColor" }}
    pointLabelYOffset={-12}
    useMesh={true}
    legends={[
      {
        anchor: "bottom-right",
        direction: "column",
        justify: false,
        translateX: 100,
        translateY: 0,
        itemsSpacing: 0,
        itemDirection: "left-to-right",
        itemWidth: 80,
        itemHeight: 20,
        itemOpacity: 0.75,
        symbolSize: 12,
        symbolShape: "circle",
        symbolBorderColor: "rgba(0, 0, 0, .5)",
        effects: [
          {
            on: "hover",
            style: {
              itemBackground: "rgba(0, 0, 0, .03)",
              itemOpacity: 1,
            },
          },
        ],
      },
    ]}
  />
);

export default () => (
  <div style={{ maxWidth: 1000, minHeight: 200, height: 500 }}>
    <Link to="/">
      <ArrowLeft size={20} />
    </Link>
    <h1>Nivo</h1>
    <a href="https://nivo.rocks/line/" target="_blank" rel="noreferrer">
      Documentation
    </a>
    <br />
    <a href="https://github.com/plouc/nivo" target="_blank" rel="noreferrer">
      Github
    </a>
    <MyResponsiveLine data={data} />
  </div>
);
