import { Link } from "@remix-run/react";
import React from "react";
import { ArrowLeft } from "react-feather";
import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  LineSeries,
  VerticalGridLines,
  Crosshair,
} from "react-vis";

export function links() {
  return [
    {
      rel: "stylesheet",
      href: "https://unpkg.com/react-vis/dist/style.css",
    },
  ];
}

const DATA = [
  [
    { x: 1, y: 10 },
    { x: 2, y: 7 },
    { x: 3, y: 15 },
  ],
  [
    { x: 1, y: 20 },
    { x: 2, y: 5 },
    { x: 3, y: 15 },
  ],
];

export default class DynamicCrosshair extends React.Component {
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {
      crosshairValues: [],
    };
  }

  render() {
    return (
      <>
        <Link to="/">
          <ArrowLeft size={20} />
        </Link>
        <h3>
          Deprecated, uses class syntax for hover interactions, requires script
          and style imports, responsivity is a pain.
        </h3>
        <XYPlot
          onMouseLeave={() => this.setState({ crosshairValues: [] })}
          width={1000}
          height={500}
        >
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          <LineSeries
            onNearestX={(value, { index }) =>
              this.setState({ crosshairValues: DATA.map((d) => d[index]) })
            }
            data={DATA[0]}
          />
          <LineSeries data={DATA[1]} />
          <Crosshair values={this.state.crosshairValues} />
        </XYPlot>
        <script
          type="text/javascript"
          src="https://unpkg.com/react-vis/dist/dist.min.js"
        ></script>
      </>
    );
  }
}
