import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import AppleIcon from "@mui/icons-material/Apple";
import AndroidIcon from "@mui/icons-material/Android";
import { CardBody, CardTitle, CustomizedButton } from "./Card.styled";

const CardWrapper = styled(Box)`
  width: 368px;
  border-left: 1px solid var(--secondary-background);
  border-right: 1px solid var(--secondary-background);
`;

const CardContainer = styled(Box)`
  width: 260px;
  height: 185px;
  margin-left: 50px;
`;

const ButtonsContainer = styled(Box)`
  width: 255px;
  display: flex;
  justify-content: space-between;
`;

const CardTrainer = () => {
  return (
    <CardWrapper>
      <CardContainer>
        <CardTitle>Bod*e Trainer in your pocket</CardTitle>
        <CardBody>
          Lorem ipsum dolor sit amet consect turadipisicing elit. Integer
          aliquet.
        </CardBody>
        <ButtonsContainer>
          <CustomizedButton
            startIcon={<AppleIcon />}
            endIcon={<ChevronRightIcon />}
            variant="outlined"
          >
            iOS
          </CustomizedButton>
          <CustomizedButton
            startIcon={<AndroidIcon />}
            endIcon={<ChevronRightIcon />}
            variant="outlined"
          >
            Android
          </CustomizedButton>
        </ButtonsContainer>
      </CardContainer>
    </CardWrapper>
  );
};

export default CardTrainer;
