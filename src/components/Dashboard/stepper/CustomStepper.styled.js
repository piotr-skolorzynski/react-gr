import styled from "styled-components";

export const StepperWrapper = styled.div`
  width: 228px;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StepperHeader = styled.span`
  font-size: 10px;
  text-transform: uppercase;
`;

export const Step = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #aebc04;
  margin-bottom: 5px;
`;

export const StepDisabled = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #e9e9e9;
  margin-bottom: 5px;
`;

export const StepActive = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #fff;
  border: 2px solid #e9e9e9;
  margin-bottom: 5px;
`;

export const StepLabel = styled.div`
  font-size: 10px;
  text-align: center;
`;

export const StepLine = styled.div`
  width: 12px;
  height: 3px;
  margin-bottom: 16px;
  background-color: #aebc04;
`;

export const StepLineDisabled = styled.div`
  width: 10px;
  height: 3px;
  margin-bottom: 16px;
  background-color: #e9e9e9;
`;
