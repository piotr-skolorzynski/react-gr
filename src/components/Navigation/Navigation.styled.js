import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export const CustomizedAppBar = styled(AppBar)`
  background-color: #fff;
`;

export const CustomizedToolbar = styled(Toolbar)`
  width: 978px;
  height: 78px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

export const LinksGroup = styled(Stack)`
  height: 100%;
  margin-left: 118px;
  color: var(--text-color);
  border-left: 1px solid var(--secondary-background);
`;

export const CustomizedAccount = styled(Button)`
  height: 100%;
  color: var(--text-color);
`;
