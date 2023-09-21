import * as React from "react";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Title from "../Typography/Title";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

export default function Fixed() {
  return (
    <React.Fragment>
      <Title color="#b617b0">Fixed Issues</Title>
      <Stack direction="row" alignItems="baseline">
        <Typography component="p" variant="h4" sx={{ fontWeight: 700 }}>
          75
        </Typography>
      </Stack>
      <div
        style={{
          width: "50px",
          height: "50px",
          backgroundColor: "#b617b0",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <InfoOutlinedIcon fontSize="medium" sx={{ fill: "#fff" }} />
      </div>
    </React.Fragment>
  );
}
