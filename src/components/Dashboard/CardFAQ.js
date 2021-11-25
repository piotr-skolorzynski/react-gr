import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { CardBody, CardTitle, CustomizedButton } from "./Card.styled";

const CardContainer = styled(Box)`
  width: 305px;
  height: 190px;
  margin-left: 40px;
`;

const CardFAQ = () => {
  return (
    <CardContainer>
      <CardTitle>Frequently Asked Questions</CardTitle>
      <CardBody>
        Lorem ipsum dolor sit amet consect turadipisicing elit. Integer
        aliquet.
      </CardBody>
      <CustomizedButton endIcon={<ChevronRightIcon />} variant="outlined">
        Read FAQs
      </CustomizedButton>
    </CardContainer>
  );
};

export default CardFAQ;
