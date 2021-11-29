import { Link, useLocation } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
  CustomizedAccount,
  CustomizedAppBar,
  CustomizedToolbar,
} from "./Navigation.styled";
import userAvatar from "../../assets/woman-avatar.jpg";
import "./navigation.css";

const Navigation = () => {

  //dane do pozyskania jako props, pobrane poprzez useEffect lub z kontektu globalnego
  const name = "Olivia";
  const surname = "Wilde";

  const { pathname } = useLocation();
  const splitLocation = pathname.split("/");

  return (
    <>
      <CustomizedAppBar position="fixed">
        <CustomizedToolbar>
          <Box
            sx={{
              marginLeft: "120px",
              height: "100%",
              width: "375px",
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              borderLeft: "1px solid var(--secondary-background)",
            }}
          >
            <div className="link-wrapper">
              <Link
                to="/"
                className={
                  splitLocation[1] === "" ? "link link--active" : "link"
                }
              >
                Dashboard
              </Link>
              <div
                className={
                  splitLocation[1] === ""
                    ? "underline underline--active"
                    : "underline"
                }
              ></div>
            </div>
            <div className="link-wrapper">
              <Link
                to="/recipes"
                className={
                  splitLocation[1] === "recipes" ? "link link--active" : "link"
                }
              >
                Recipes
              </Link>
              <div
                className={
                  splitLocation[1] === "recipes"
                    ? "underline underline--active"
                    : "underline"
                }
              ></div>
            </div>
            <div className="link-wrapper">
              <Link
                to="/challenge"
                className={
                  splitLocation[1] === "challenge"
                    ? "link link--active"
                    : "link"
                }
              >
                Challenge
              </Link>
              <div
                className={
                  splitLocation[1] === "challenge"
                    ? "underline underline--active"
                    : "underline"
                }
              ></div>
            </div>
          </Box>
          <CustomizedAccount
            startIcon={
              <Avatar src={userAvatar} sx={{ width: 36, height: 36 }} />
            }
            endIcon={<KeyboardArrowDownIcon />}
          >{`${name} ${surname}`}</CustomizedAccount>
        </CustomizedToolbar>
      </CustomizedAppBar>
      <CustomizedToolbar />
    </>
  );
};

export default Navigation;
