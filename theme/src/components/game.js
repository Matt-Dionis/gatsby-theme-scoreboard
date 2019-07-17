import GameContext from "../GameContext";
import React from "react";
import { Styled } from "theme-ui";

const Game = () => (
  <GameContext.Consumer>
    {({ venue }) => (
      <div>
        <Styled.h1>{venue}</Styled.h1>
      </div>
    )}
  </GameContext.Consumer>
);

export default Game;
