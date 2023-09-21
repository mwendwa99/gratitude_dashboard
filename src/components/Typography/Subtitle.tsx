import * as React from "react";
import Typography from "@mui/material/Typography";

interface SubtitleProps {
  children?: React.ReactNode;
}

export default function Title(props: SubtitleProps) {
  return (
    <Typography variant="body1" sx={{ color: "#000" }} gutterBottom>
      {props.children}
    </Typography>
  );
}
