// import GameRow from "./game-row";
import GamesContext from "../GamesContext";
import ScoreRow from "./score-row";
import React, { useContext } from "react";
import { Link } from "gatsby";
import { Styled } from "theme-ui";

const gameLinkStyle = {
  textDecoration: "none"
};

const gameRowStyle = {
  borderBottom: "1px solid",
  borderColor: "lightgray",
  cursor: "pointer"
};

const GameList = () => {
  const { games } = useContext(GamesContext);

  return (
    <Styled.ul>
      {games.map(game => (
        <Styled.li style={gameRowStyle}>
          <Link to={game.slug} style={gameLinkStyle} key={game.id}>
            <Styled.ul>
              <ScoreRow team={game.away} />
              <ScoreRow team={game.home} />
            </Styled.ul>
          </Link>
        </Styled.li>
      ))}
    </Styled.ul>
  );
};

export default GameList;
