import GamesContext from "../GamesContext";
import Img from "gatsby-image";
import React, { useContext } from "react";

const pStyle = {
  color: "black"
};

const teamStyle = {
  display: "flex"
};

const winnerStyle = {
  color: "black",
  fontWeight: "bold"
};

const fetchLogoForTeam = (team, logos) =>
  logos.find(logo => logo.fixed.src.includes(`${team}.png`)).fixed;

const TeamBlock = ({ team }) => {
  const { logos } = useContext(GamesContext);

  return (
    <div style={teamStyle}>
      <Img
        alt={`${team.name} logo`}
        fixed={fetchLogoForTeam(team.abbreviation, logos)}
      />
      <p style={team.isWinner ? winnerStyle : pStyle}>{team.abbreviation}</p>
    </div>
  );
};

export default TeamBlock;
