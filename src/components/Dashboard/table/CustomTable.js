import "./table.css";
import PrintIcon from "@mui/icons-material/Print";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDumbbell,
  faCheck,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import { DayCell, DayCellFooter, Hours, HoursFooter, TitleDay, TitleHours, WorkoutCell, WorkoutTitle } from "./CustomTable.styled";

const CustomizedTable = () => {

  return (
    <table cellSpacing="0" cellPadding="0" border="0" className="table">
      <tbody>
        <tr>
          <TitleHours className="cell-background"></TitleHours>
          <TitleDay className="title-day--side">Day 64</TitleDay>
          <TitleDay className="title-day title-day--active">Day 65</TitleDay>
          <TitleDay className="title-day cell-next-to-active">Day 66</TitleDay>
          <TitleDay className="title-day">Day 67</TitleDay>
          <TitleDay className="title-day">Day 68</TitleDay>
          <TitleDay className="title-day">Day 69</TitleDay>
          <TitleDay className="title-day">Day 70</TitleDay>
        </tr>
        <tr>
          <Hours className="cell-background">
            <b>6:00</b> AM
          </Hours>
          <DayCell className="daycell--side">
            Bode*e Shake
            <FontAwesomeIcon
              icon={faCheckCircle}
              className="check-icon-cirlce check-icon-cirlce--show"
            />
          </DayCell>
          <DayCell className="daycell daycell--active">Bode*e Shake</DayCell>
          <DayCell className="daycell cell-next-to-active">
            Bode*e Shake
          </DayCell>
          <DayCell className="daycell">Bode*e Shake</DayCell>
          <DayCell className="daycell">Bode*e Shake</DayCell>
          <DayCell className="daycell">Bode*e Shake</DayCell>
          <td rowSpan="5" className="freedaycell">
            guilt-free day <TagFacesIcon fontSize="large" sx={{ mb: 2 }} />
          </td>
        </tr>
        <tr>
          <Hours className="cell-background">
            <b>9:00</b> AM
          </Hours>
          <DayCell className="daycell--side">
            Ham and Swiss Roll Ups{" "}
            <FontAwesomeIcon
              icon={faCheckCircle}
              className="check-icon-cirlce check-icon-cirlce--show"
            />
          </DayCell>
          <DayCell className="daycell daycell--active">
            Ham and Swiss Roll Ups
          </DayCell>
          <DayCell className="daycell cell-next-to-active">
            Grilled Steak (HC)
          </DayCell>
          <DayCell className="daycell">Ham and Swiss Roll Ups</DayCell>
          <DayCell className="daycell">Ham and Swiss Roll Ups</DayCell>
          <DayCell className="daycell">Grilled Steak (HC)</DayCell>
        </tr>
        <tr>
          <Hours className="cell-background">
            <b>12:00</b> AM
          </Hours>
          <DayCell className="daycell--side">
            Turkey Melt
            <FontAwesomeIcon
              icon={faCheckCircle}
              className="check-icon-cirlce check-icon-cirlce--show"
            />
          </DayCell>
          <DayCell
            className="daycell daycell--active"
          >
            Turkey Melt
          </DayCell>
          <DayCell className="daycell cell-next-to-active">
            Bode*e Shake
          </DayCell>
          <DayCell className="daycell">Turkey Melt</DayCell>
          <DayCell className="daycell">Bode*e Shake</DayCell>
          <DayCell className="daycell">Bode*e Shake</DayCell>
        </tr>
        <tr>
          <Hours className="cell-background">
            <b>3:00</b> PM
          </Hours>
          <DayCell className="daycell--side">
            Bode*e Burn with Mozarella and Tomato Slices{" "}
            <FontAwesomeIcon
              icon={faCheckCircle}
              className="check-icon-cirlce check-icon-cirlce--show"
            />
          </DayCell>
          <DayCell className="daycell daycell--active">
            Bode*e Burn with Mozarella and Tomato Slices
          </DayCell>
          <DayCell className="daycell cell-next-to-active">
            Bode*e Burn and Whole-Wheat English Muffin with Butter Spray
          </DayCell>
          <DayCell className="daycell">
            Bode*e Burn with Mozarella and Tomato Slices
          </DayCell>
          <DayCell className="daycell">
            Bode*e Burn with Mozarella and Tomato Slices
          </DayCell>
          <DayCell className="daycell">
            Bode*e Burn and Whole-Wheat English Muffin with Butter Spray
          </DayCell>
        </tr>
        <tr>
          <Hours className="cell-background">
            <b>6:00</b> PM
          </Hours>
          <DayCell className="daycell--side daycell--bottom">
            Turkey Melt
          </DayCell>
          <DayCell className="daycell daycell--bottom daycell--active">
            Turkey Melt
          </DayCell>
          <DayCell className="daycell daycell--bottom cell-next-to-active">
            Garlic Lime Chicken (HC)
          </DayCell>
          <DayCell className="daycell daycell--bottom">Turkey Melt</DayCell>
          <DayCell className="daycell daycell--bottom">Turkey Melt</DayCell>
          <DayCell className="daycell daycell--bottom">
            Garlic Lime Chicken (HC)
          </DayCell>
        </tr>
        <tr>
          <HoursFooter className="cell-background"></HoursFooter>
          <DayCellFooter className="cell-background daycell-footer--side">
            low-carb
          </DayCellFooter>
          <DayCellFooter className="cell-background daycell-footer daycell-footer--active">
            low-carb
          </DayCellFooter>
          <DayCellFooter className="cell-background daycell-footer cell-next-to-active">
            high-carb
          </DayCellFooter>
          <DayCellFooter className="cell-background daycell-footer">
            low-carb
          </DayCellFooter>
          <DayCellFooter className="cell-background daycell-footer">
            low-carb
          </DayCellFooter>
          <DayCellFooter className="cell-background daycell-footer">
            low-carb
          </DayCellFooter>
          <td rowSpan="2" className="print-cell">
            <PrintIcon fontSize="medium" /> <span>Print</span>
          </td>
        </tr>
        <tr>
          <WorkoutTitle className="cell-background">
            <span>Workout</span> <ArrowRightIcon fontSize="small" />
          </WorkoutTitle>
          <WorkoutCell className="cell-background workoutcell--side">
            <FontAwesomeIcon
              icon={faDumbbell}
              className="dumbbell-icon--checked"
            />
            <FontAwesomeIcon
              icon={faCheck}
              className="check-icon check-icon--show"
            />
          </WorkoutCell>
          <WorkoutCell className="cell-background workoutcell workoutcell--active">
            <FontAwesomeIcon
              icon={faDumbbell}
              className="dumbbell-icon--checked"
            />
            <FontAwesomeIcon
              icon={faCheck}
              className="check-icon check-icon--show"
            />
          </WorkoutCell>
          <WorkoutCell className="cell-background workoutcell cell-next-to-active">
            <FontAwesomeIcon icon={faDumbbell} className="dumbbell-icon" />
            <FontAwesomeIcon icon={faCheck} className="check-icon" />
          </WorkoutCell>
          <WorkoutCell className="cell-background workoutcell">
            <FontAwesomeIcon icon={faDumbbell} className="dumbbell-icon" />
            <FontAwesomeIcon icon={faCheck} className="check-icon" />
          </WorkoutCell>
          <WorkoutCell className="cell-background workoutcell">
            <FontAwesomeIcon icon={faDumbbell} className="dumbbell-icon" />
            <FontAwesomeIcon icon={faCheck} className="check-icon" />
          </WorkoutCell>
          <WorkoutCell className="cell-background workoutcell">
            <FontAwesomeIcon icon={faDumbbell} className="dumbbell-icon" />
            <FontAwesomeIcon icon={faCheck} className="check-icon" />
          </WorkoutCell>
        </tr>
      </tbody>
    </table>
  );
};

export default CustomizedTable;
