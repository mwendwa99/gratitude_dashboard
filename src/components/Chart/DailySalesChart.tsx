import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts";
import Title from "../Typography/Title";
import Subtitle from "../Typography/Subtitle";

// Generate Sales Data
function createData(time: string, amount?: number) {
  return { time, amount };
}

const data = [
  createData("100", 300),
  createData("200", 200),
  createData("300", 700),
  createData("400", 0),
  createData("500", 500),
  createData("600", 500),
  createData("700", 100),
  createData("800", 300),
  createData("900", 300),
];

export default function Chart() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Title color="#7940c5">Daily Sales</Title>
      <Subtitle>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, rem.
      </Subtitle>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis
            dataKey="time"
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          />
          <YAxis
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          ></YAxis>
          <Line
            isAnimationActive={false}
            type="monotone"
            dataKey="amount"
            stroke={theme.palette.primary.main}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}
