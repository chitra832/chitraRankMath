import React, { useState } from "react";
import "./ChartComponent.css";
import { GoDotFill } from "react-icons/go";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const ChartComponent = () => {
  const [labels, setLabels] = useState([
    { name: "Days", low: 3.895, high: 5.857 },
    { name: "Week", low: 4.895, high: 6.857 },
    { name: "Month", low: 5.895, high: 7.857 },
    { name: "Year", low: 6.895, high: 8.857 },
  ]);
  const [activeLabel, setActiveLabel] = useState(labels[1]);

  const handleLabelClick = (label) => {
    setActiveLabel(label);
  };

  const data = [
    { name: "Day 1", value: 1.5 },
    { name: "Day 2", value: 2.2 },
    { name: "Day 3", value: 1.8 },
    { name: "Day 4", value: 2.5 },
    { name: "Day 5", value: 2.2 },
  ];

  const lastDataPoint = data[data.length - 1];
  return (
    <div className="chartComponent">
      <div className="chartSwipeLabels">
        {labels.map((label, i) => (
          <h5
            className={`muted ${label === activeLabel ? "active" : ""}`}
            key={i}
            onClick={() => handleLabelClick(label)}
          >
            {label.name}
          </h5>
        ))}
      </div>
      <div className="chartCard">
        <div className="lowHigh">
          <div className="low">
            <h6>
              <GoDotFill color="#FF4E8D" />
              Lower: <span>{activeLabel.low}</span>
            </h6>
          </div>
          <div className="high">
            <h6>
              <GoDotFill color="green" />
              Higher: <span>{activeLabel.high}</span>
            </h6>
          </div>
        </div>
        <div className="areaChart">
          <ResponsiveContainer width="100%" height={100}>
            <AreaChart
              data={data}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <Area
                type="monotone"
                dataKey="value"
                stackId="1"
                stroke="#FFA428"
                fill="#FFF6ED"
              />
            </AreaChart>
          </ResponsiveContainer>
          <div className="lastTitle">
            <h5>
              <GoDotFill color="#FFA428" /> 1 BTC = $5.483
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartComponent;
