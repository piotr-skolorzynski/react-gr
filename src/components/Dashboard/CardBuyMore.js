import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { CardBody, CardTitle, CustomizedButton } from "./Card.styled";

const CardContainer = styled(Box)`
  width: 305px;
  height: 190px;
`;

const CardBuyMore = () => {
  return (
    <CardContainer>
      <CardTitle>Running out of products?</CardTitle>
      <CardBody>
        Lorem ipsum dolor sit amet consect turadipisicing elit. Integer aliquet.
      </CardBody>
      <CustomizedButton endIcon={<ChevronRightIcon />} variant="outlined">
        Buy now
      </CustomizedButton>
    </CardContainer>
  );
};

export default CardBuyMore;
