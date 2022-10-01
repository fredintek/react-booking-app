import React from "react";
import "./Chart.scss";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "January", total: 1200 },
  { name: "Febuary", total: 2100 },
  { name: "March", total: 800 },
  { name: "April", total: 1600 },
  { name: "May", total: 900 },
  { name: "June", total: 1700 },
];

const Chart = ({ aspect, title }) => {
  return (
    <div className="chart">
      <p className="chartTitle">{title}</p>
      <ResponsiveContainer width="100%" aspect={aspect}>
        <AreaChart
          className="chartGraph"
          width={730}
          height={250}
          data={data}
          margin={{ top: 30, right: 30, left: 30, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke="gray" />
          <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="total"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#colorTotal)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
