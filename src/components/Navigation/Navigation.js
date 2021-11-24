import { Link } from "react-router-dom";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
  CustomizedAccount,
  CustomizedAppBar,
  CustomizedToolbar,
  LinksGroup,
} from "./Navigation.styled";

const Navigation = () => {
  const name = "Olivia";
  const surname = "Wilde";
  return (
    <>
      <CustomizedAppBar position="fixed">
        <CustomizedToolbar>
          <LinksGroup direction="row" spacing={3}>
            <Button variant="text" sx={{ ml: 3 }} component={Link} to="/">
              Dashboard
            </Button>
            <Button variant="text" component={Link} to="/recipes">
              Recipes
            </Button>
            <Button variant="text" component={Link} to="/challenge">
              Challenge
            </Button>
          </LinksGroup>
          <CustomizedAccount
            startIcon={<Avatar sx={{ width: 36, height: 36 }} />}
            endIcon={<KeyboardArrowDownIcon />}
          >{`${name} ${surname}`}</CustomizedAccount>
        </CustomizedToolbar>
      </CustomizedAppBar>
      <Toolbar />
    </>
  );
};

export default Navigation;
