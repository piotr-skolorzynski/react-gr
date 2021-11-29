import {
  StepperWrapper,
  Step,
  StepLabel,
  StepLine,
  StepLineDisabled,
  StepActive,
  StepDisabled,
  StepperHeader,
} from "./CustomStepper.styled";

const CustomStepper = () => {
  return (
    <div>
      <StepperHeader>your 12 week progress</StepperHeader>
      <StepperWrapper>
        <div>
          <Step></Step>
          <StepLabel>1</StepLabel>
        </div>
        <StepLine />
        <div>
          <Step></Step>
          <StepLabel>2</StepLabel>
        </div>
        <StepLine />
        <div>
          <Step></Step>
          <StepLabel>3</StepLabel>
        </div>
        <StepLine />
        <div>
          <Step></Step>
          <StepLabel>4</StepLabel>
        </div>
        <StepLine />
        <div>
          <Step></Step>
          <StepLabel>5</StepLabel>
        </div>
        <StepLine />
        <div>
          <Step></Step>
          <StepLabel>6</StepLabel>
        </div>
        <StepLineDisabled />
        <div>
          <StepActive></StepActive>
          <StepLabel>7</StepLabel>
        </div>
        <StepLineDisabled />
        <div>
          <StepDisabled></StepDisabled>
          <StepLabel>8</StepLabel>
        </div>
        <StepLineDisabled />
        <div>
          <StepDisabled></StepDisabled>
          <StepLabel>9</StepLabel>
        </div>
        <StepLineDisabled />
        <div>
          <StepDisabled></StepDisabled>
          <StepLabel>10</StepLabel>
        </div>
        <StepLineDisabled />
        <div>
          <StepDisabled></StepDisabled>
          <StepLabel>11</StepLabel>
        </div>
        <StepLineDisabled />
        <div>
          <StepDisabled></StepDisabled>
          <StepLabel>12</StepLabel>
        </div>
      </StepperWrapper>
    </div>
  );
};

export default CustomStepper;
