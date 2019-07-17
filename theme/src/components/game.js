import GameContext from "../GameContext";
import React, { useContext } from "react";
import { Styled } from "theme-ui";

const Game = () => {
  const { venue } = useContext(GameContext);

  return (
    <div>
      <Styled.h1>{venue}</Styled.h1>
    </div>
  );
};

export default Game;
