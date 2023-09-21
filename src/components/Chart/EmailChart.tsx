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
  createData("100", 1000),
  createData("200", 350),
  createData("300", 550),
  createData("400", 950),
  createData("500", 550),
  createData("600", 300),
  createData("700", 100),
  createData("800", 950),
  createData("900", 100),
  createData("1000", 700),
];

export default function Deposits() {
  const theme = useTheme();
  return (
    <React.Fragment>
      <Title color="#fe324d">Email Subscriptions</Title>
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
