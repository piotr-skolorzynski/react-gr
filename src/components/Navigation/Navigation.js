import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
  CustomizedAccount,
  CustomizedAppBar,
  CustomizedLink,
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
            <CustomizedLink
              variant="text"
              sx={{ ml: 3 }}
              component={Link}
              to="/"
            >
              Dashboard
            </CustomizedLink>
            <CustomizedLink variant="text" component={Link} to="/recipes">
              Recipes
            </CustomizedLink>
            <CustomizedLink variant="text" component={Link} to="/challenge">
              Challenge
            </CustomizedLink>
          </LinksGroup>
          <CustomizedAccount
            startIcon={<Avatar sx={{ width: 36, height: 36 }} />}
            endIcon={<KeyboardArrowDownIcon />}
          >{`${name} ${surname}`}</CustomizedAccount>
        </CustomizedToolbar>
      </CustomizedAppBar>
      <CustomizedToolbar />
    </>
  );
};

export default Navigation;
