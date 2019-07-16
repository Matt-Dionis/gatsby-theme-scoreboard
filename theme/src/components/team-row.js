import React from "react";
import TeamBlock from "./team-block";

const pStyle = {
  color: "black"
};

const winnerStyle = {
  color: "black",
  fontWeight: "bold"
};

const TeamRow = ({ team, logos }) => {
  return (
    <>
      <TeamBlock team={team} logos={logos} />
      <p style={team.isWinner ? winnerStyle : pStyle}>{team.score}</p>
    </>
  );
};

export default TeamRow;
