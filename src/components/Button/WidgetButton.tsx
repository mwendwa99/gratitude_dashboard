import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export default function InputFileUpload() {
  return (
    <Button
      sx={{
        backgroundColor: "#7940c5",
        borderRadius: "50px",
        textTransform: "capitalize",
      }}
      component="label"
      variant="contained"
      startIcon={<AddIcon />}
    >
      Add Widget
      <VisuallyHiddenInput type="file" />
    </Button>
  );
}
