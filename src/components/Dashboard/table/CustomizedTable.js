import styled from "styled-components";
import "./table.css";

const TitleHours = styled.td`
  height: 50px;
  width: 84px;
`;

const TitleDay = styled.td`
  background-color: #fff;
  text-align: center;
  text-transform: uppercase;
  color: var(--seconadary-text-color);
  font-size: 24px;
  border-left: 2px solid var(--secondary-background);
  border-bottom: 2px solid var(--secondary-background);
`;

const TitleDaySide = styled.td`
  background-color: #fff;
  text-align: center;
  text-transform: uppercase;
  color: var(--seconadary-text-color);
  font-size: 24px;
  border-bottom: 2px solid var(--secondary-background);
`;

const Hours = styled.td`
  height: 92px;
  width: 84px;
  font-size: 14px;
  text-align: center;
  font-weight: 300;
`;

const HoursFooter = styled.td`
  height: 35px;
  width: 84px;
  border-bottom: 2px solid #c7c6c6;
`;

const DayCell = styled.td`
  background-color: #fff;
  text-align: center;
  text-transform: uppercase;
  color: var(--seconadary-text-color);
  font-size: 24px;
  border-left: 2px solid var(--secondary-background);
  border-bottom: 2px solid var(--secondary-background);
`;

const DayCellSide = styled.td`
  background-color: #fff;
  text-align: center;
  text-transform: uppercase;
  color: var(--seconadary-text-color);
  font-size: 24px;
  border-bottom: 2px solid var(--secondary-background);
`;

const DayCellFooter = styled.td`
  font-size: 12px;
  font-weight: 500;
  text-align: center;
  text-transform: uppercase;
  border-bottom: 2px solid #c7c6c6;
  border-left: 2px solid #c7c6c6;
`;
const DayCellFooterSide = styled.td`
  font-size: 12px;
  font-weight: 500;
  text-align: center;
  text-transform: uppercase;
  border-bottom: 2px solid #c7c6c6;
`;

const WorkoutTitle = styled.td`
  height: 35px;
  font-size: 10px;
  font-weight: 500;
  text-align: center;
`;

const WorkoutCell = styled.td`
  font-size: 10px;
  font-weight: 500;
  text-align: center;
  border-left: 2px solid #c7c6c6;
`;

const WorkoutCellSide = styled.td`
  font-size: 10px;
  font-weight: 500;
  text-align: center;
`;

const CustomizedTable = () => {
  return (
    <table cellspacing="0" cellpadding="0" border="0" className="table">
      <tr>
        <TitleHours className="cell-background"></TitleHours>
        <TitleDaySide>Day 64</TitleDaySide>
        <TitleDay>Day 65</TitleDay>
        <TitleDay>Day 66</TitleDay>
        <TitleDay>Day 67</TitleDay>
        <TitleDay>Day 68</TitleDay>
        <TitleDay>Day 69</TitleDay>
        <TitleDay>Day 70</TitleDay>
      </tr>
      <tr>
        <Hours className="cell-background">
          <b>6:00</b> AM
        </Hours>
        <DayCellSide>Day 64</DayCellSide>
        <DayCell>Day 65</DayCell>
        <DayCell>Day 66</DayCell>
        <DayCell>Day 67</DayCell>
        <DayCell>Day 68</DayCell>
        <DayCell>Day 69</DayCell>
        <DayCell>Day 70</DayCell>
      </tr>
      <tr>
        <Hours className="cell-background">
          <b>9:00</b> AM
        </Hours>
        <DayCellSide>Day 64</DayCellSide>
        <DayCell>Day 65</DayCell>
        <DayCell>Day 66</DayCell>
        <DayCell>Day 67</DayCell>
        <DayCell>Day 68</DayCell>
        <DayCell>Day 69</DayCell>
        <DayCell>Day 70</DayCell>
      </tr>
      <tr>
        <Hours className="cell-background">
          <b>12:00</b> AM
        </Hours>
        <DayCellSide>Day 64</DayCellSide>
        <DayCell>Day 65</DayCell>
        <DayCell>Day 66</DayCell>
        <DayCell>Day 67</DayCell>
        <DayCell>Day 68</DayCell>
        <DayCell>Day 69</DayCell>
        <DayCell>Day 70</DayCell>
      </tr>
      <tr>
        <Hours className="cell-background">
          <b>3:00</b> PM
        </Hours>
        <DayCellSide>Day 64</DayCellSide>
        <DayCell>Day 65</DayCell>
        <DayCell>Day 66</DayCell>
        <DayCell>Day 67</DayCell>
        <DayCell>Day 68</DayCell>
        <DayCell>Day 69</DayCell>
        <DayCell>Day 70</DayCell>
      </tr>
      <tr>
        <Hours className="cell-background">
          <b>6:00</b> PM
        </Hours>
        <DayCellSide className="daycell-bottom">Day 64</DayCellSide>
        <DayCell className="daycell-bottom">Day 65</DayCell>
        <DayCell className="daycell-bottom">Day 66</DayCell>
        <DayCell className="daycell-bottom">Day 67</DayCell>
        <DayCell className="daycell-bottom">Day 68</DayCell>
        <DayCell className="daycell-bottom">Day 69</DayCell>
        <DayCell className="daycell-bottom">Day 70</DayCell>
      </tr>
      <tr>
        <HoursFooter className="cell-background"></HoursFooter>
        <DayCellFooterSide className="cell-background">
          low-carb
        </DayCellFooterSide>
        <DayCellFooter className="cell-background">low-carb</DayCellFooter>
        <DayCellFooter className="cell-background">high-carb</DayCellFooter>
        <DayCellFooter className="cell-background">low-carb</DayCellFooter>
        <DayCellFooter className="cell-background">low-carb</DayCellFooter>
        <DayCellFooter className="cell-background">low-carb</DayCellFooter>
        <td rowspan="2" className="print-cell">
          Print
        </td>
      </tr>
      <tr>
        <WorkoutTitle className="cell-background">Workout</WorkoutTitle>
        <WorkoutCellSide className="cell-background">Day 64</WorkoutCellSide>
        <WorkoutCell className="cell-background">Day 65</WorkoutCell>
        <WorkoutCell className="cell-background">Day 66</WorkoutCell>
        <WorkoutCell className="cell-background">Day 67</WorkoutCell>
        <WorkoutCell className="cell-background">Day 68</WorkoutCell>
        <WorkoutCell className="cell-background">Day 69</WorkoutCell>
      </tr>
    </table>
  );
};

export default CustomizedTable;
