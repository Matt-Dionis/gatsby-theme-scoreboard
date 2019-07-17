import React from "react";
import TeamRow from "./team-row";
import { Styled } from "theme-ui";

const scoreRowStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
};

const ScoreRow = ({ team }) => {
  return (
    <Styled.li style={scoreRowStyle}>
      <TeamRow team={team} />
    </Styled.li>
  );
};

export default ScoreRow;
