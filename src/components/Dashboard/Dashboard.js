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

const Dashboard = () => {
  return (
    <>
      <DashBoardHeader>
        <CustomizedStepper />
        <WeekNumber>
          <IconButton
            aria-label="lower number of week"
            sx={CustomizedIconButton}
          >
            <ChevronLeftIcon />
          </IconButton>
          <span>Week 7</span>
          <IconButton
            aria-label="higher number of week"
            sx={CustomizedIconButton}
          >
            <ChevronRightIcon />
          </IconButton>
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
      <DashboardFooter />
    </>
  );
};

export default Dashboard;
