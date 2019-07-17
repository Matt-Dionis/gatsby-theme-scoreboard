import React from "react";
import TeamBlock from "./team-block";
import { Styled } from "theme-ui";

const pStyle = {
  color: "black"
};

const scoreRowStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
};

const winnerStyle = {
  color: "black",
  fontWeight: "bold"
};

const ScoreRow = React.memo(({ team }) => (
  <Styled.li style={scoreRowStyle}>
    <TeamBlock team={team} />
    <p style={team.isWinner ? winnerStyle : pStyle}>{team.score}</p>
  </Styled.li>
));

export default ScoreRow;
