import GameRow from "./game-row";
import React from "react";
import { Link } from "gatsby";
import { Styled } from "theme-ui";

const gameLinkStyle = {
  textDecoration: "none"
};

const GameList = ({ games, logos }) => {
  return (
    <Styled.ul>
      {games.map(game => (
        <Link to={game.slug} style={gameLinkStyle} key={game.id}>
          <GameRow game={game} logos={logos} />
        </Link>
      ))}
    </Styled.ul>
  );
};

export default GameList;
