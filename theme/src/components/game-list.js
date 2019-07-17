import GameRow from "./game-row";
import GamesContext from "../GamesContext";
import React from "react";
import { Link } from "gatsby";
import { Styled } from "theme-ui";

const gameLinkStyle = {
  textDecoration: "none"
};

const GameList = () => {
  return (
    <GamesContext.Consumer>
      {({ games }) => (
        <Styled.ul>
          {games.map(game => (
            <Link to={game.slug} style={gameLinkStyle} key={game.id}>
              <GameRow game={game} />
            </Link>
          ))}
        </Styled.ul>
      )}
    </GamesContext.Consumer>
  );
};

export default GameList;
