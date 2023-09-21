import * as React from "react";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Title from "../Typography/Title";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";

export default function Space() {
  return (
    <React.Fragment>
      <Title color="#85b605">Used Space</Title>
      <Stack direction="row" alignItems="baseline">
        <Typography component="p" variant="h4" sx={{ fontWeight: 700 }}>
          49/50{" "}
        </Typography>
        <Typography
          component="p"
          variant="h4"
          style={{ fontSize: "16px", fontWeight: 700 }}
        >
          GB
        </Typography>
      </Stack>
      <div
        style={{
          width: "50px",
          height: "50px",
          backgroundColor: "#85b605",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ContentCopyOutlinedIcon fontSize="medium" sx={{ fill: "#fff" }} />
      </div>
    </React.Fragment>
  );
}
