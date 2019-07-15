import React from "react";
import { Styled } from "theme-ui";

const Game = ({ date, venue, home, away, win, loss, save, homeruns }) => (
  <div>
    <Styled.h1>
      {venue}
    </Styled.h1>
  </div>
);

export default Game;
