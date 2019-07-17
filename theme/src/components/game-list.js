import GameRow from "./game-row";
import GamesContext from "../GamesContext";
import React, { useContext } from "react";
import { Link } from "gatsby";
import { Styled } from "theme-ui";

const gameLinkStyle = {
  textDecoration: "none"
};

const GameList = () => {
  const { games } = useContext(GamesContext);

  return (
    <Styled.ul>
      {games.map(game => (
        <Link to={game.slug} style={gameLinkStyle} key={game.id}>
          <GameRow game={game} />
        </Link>
      ))}
    </Styled.ul>
  );
};

export default GameList;
