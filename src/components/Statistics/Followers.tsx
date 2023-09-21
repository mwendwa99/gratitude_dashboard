import * as React from "react";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Title from "../Typography/Title";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function Fixed() {
  return (
    <React.Fragment>
      <Title color="#0190ca">Fixed Issues</Title>
      <Stack direction="row" alignItems="baseline">
        <Typography component="p" variant="h4" sx={{ fontWeight: 700 }}>
          245
        </Typography>
      </Stack>
      <div
        style={{
          width: "50px",
          height: "50px",
          backgroundColor: "#0190ca",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TwitterIcon fontSize="medium" sx={{ fill: "#fff" }} />
      </div>
    </React.Fragment>
  );
}
