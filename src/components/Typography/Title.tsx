import * as React from "react";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

interface TitleProps {
  children?: React.ReactNode;
  color?: string;
}

export default function Title(props: TitleProps) {
  return (
    <>
      <Typography
        component="h2"
        variant="h6"
        sx={{ color: "#000" }}
        gutterBottom
      >
        {props.children}
      </Typography>
      <Divider
        sx={{
          border: props.color ? `2px solid ${props.color}` : "2px solid #000",
          borderRadius: "10px",
          width: "50%",
        }}
      />
    </>
  );
}
