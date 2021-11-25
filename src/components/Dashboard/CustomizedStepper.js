import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

const steps = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];

export default function HorizontalLabelPositionBelowStepper() {
  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={0} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
