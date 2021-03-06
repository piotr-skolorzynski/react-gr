import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";

export const CustomizedAppBar = styled(AppBar)`
  background-color: var(--primary-background);
`;

export const CustomizedToolbar = styled(Toolbar)`
  width: 978px;
  height: 78px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

export const CustomizedAccount = styled(Button)`
  height: 100%;
  color: var(--text-color);
  text-transform: none;
  :hover {
    background-color: #fff;
  }
`;
