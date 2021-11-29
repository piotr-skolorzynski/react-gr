import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const DashBoardHeader = styled(Box)`
  width: 978px;
  height: 112px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: inherit;
`;

export const WeekNumber = styled(Box)`
  width: 296px;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: var(--primary-text-color);
  font-size: 38px;
`;

export const CustomizedIconButton = {
  width: "24px",
  height: "42px",
  borderRadius: "5px",
  backgroundColor: "var(--primary-background)",
  border: "1px solid var(--secondary-background)",
};

export const IconsContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 12px;
  color: var(--text-color);
  text-transform: uppercase;
`;
