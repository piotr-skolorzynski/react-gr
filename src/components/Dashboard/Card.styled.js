import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export const CardTitle = styled(Typography)`
  margin: 12px 0;
  font-size: 28px;
  font-weight: 500;
  line-height: 1.1;
`;

export const CardBody = styled(Typography)`
  font-weight: 300;
  font-size: 15px;
  margin-bottom: 12px;
`;

export const CustomizedButton = styled(Button)`
  color: var(--text-color);
  border-color: var(--text-color);
  background-color: inherit;
  text-transform: none;
  font-size: 17px;
  font-weight: 300;
  :hover {
    border-color: var(--text-color);
    background-color: #fff;
  }
`;

export const CustomizedChevronRightIcon = styled(ChevronRightIcon)`
    font-size: 30px;
`;
