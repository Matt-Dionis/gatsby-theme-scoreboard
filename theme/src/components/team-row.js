import React from "react";
import TeamBlock from "./team-block";

const pStyle = {
  color: "black"
};

const winnerStyle = {
  color: "black",
  fontWeight: "bold"
};

const TeamRow = React.memo(({ team }) => (
  <>
    <TeamBlock team={team} />
    <p style={team.isWinner ? winnerStyle : pStyle}>{team.score}</p>
  </>
));

export default TeamRow;
