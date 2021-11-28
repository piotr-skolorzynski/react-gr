import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import {
  CustomizedIconButton,
  DashBoardHeader,
  IconsContainer,
  WeekNumber,
} from "./Dashboard.styled";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CheeseIcon from "../Icons/CheeseIcon";
import MeatIcon from "../Icons/MeatIcon";
import BroccoliIcon from "../Icons/BroccoliIcon";
import ChickenIconCrosses from "../Icons/ChickenIconCrossed";
import FishIconCrossed from "../Icons/FishIconCrossed";
import CustomizedStepper from "./CustomizedStepper";
import DashboardFooter from "./DashboardFooter";
import CustomizedTable from "./table/CustomizedTable";

// dane które możnaby pobrać z bazy danych charakterystyczne dla zalogowane dla użytkownika
// dane do pozyskania w poniższym komponenci albo w postaci props, z wykorzystanie useEffect
// kontekstu gloabalnego

const weekNumbers = [1, 2, 3, 4];
const currentWeekIndex = 1;

const Dashboard = () => {
  const [weekIndex, setWeekIndex] = useState(currentWeekIndex);

  const handleDecreaseWeekIndex = () => {
    if (weekIndex === 0) return;
    setWeekIndex(weekIndex - 1);
  };

  const handleIncreaseWeekIndex = () => {
    if (weekIndex === weekNumbers.length - 1) return;
    setWeekIndex(weekIndex + 1);
  };

  return (
    <>
      <DashBoardHeader>
        <CustomizedStepper />
        <WeekNumber>
          {weekIndex === 0 ? null : (
            <IconButton
              aria-label="decrease week number"
              sx={CustomizedIconButton}
              onClick={handleDecreaseWeekIndex}
            >
              <ChevronLeftIcon />
            </IconButton>
          )}
          Week {weekNumbers[weekIndex]}
          {weekIndex < weekNumbers.length - 1 ? (
            <IconButton
              aria-label="increase week number"
              sx={CustomizedIconButton}
              onClick={handleIncreaseWeekIndex}
            >
              <ChevronRightIcon />
            </IconButton>
          ) : null}
        </WeekNumber>
        <IconsContainer>
          <span>select your protein options</span>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "1rem",
            }}
          >
            <BroccoliIcon color="#aebc04" width={24} height={24} />
            <CheeseIcon color="#aebc04" width={24} height={24} />
            <MeatIcon color="#aebc04" width={24} height={24} />
            <FishIconCrossed color="#828282" />
            <ChickenIconCrosses color="#828282" width={24} height={24} />
          </Box>
        </IconsContainer>
      </DashBoardHeader>
      <CustomizedTable />
      <DashboardFooter />
    </>
  );
};

export default Dashboard;
