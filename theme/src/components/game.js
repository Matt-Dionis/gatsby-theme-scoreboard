import GameContext from "../GameContext";
import React, { useContext } from "react";
import { Styled } from "theme-ui";

const Game = () => {
  const { date, venue, home, away, win, loss, save, homeruns } = useContext(
    GameContext
  );

  return (
    <div>
      <Styled.h1>Date: {date}</Styled.h1>
      <Styled.h1>Venue: {venue}</Styled.h1>
      <Styled.h1>Home: {home.name}</Styled.h1>
      <Styled.h1>Away: {away.name}</Styled.h1>
      <Styled.h1>Win: {win.name}</Styled.h1>
      <Styled.h1>Loss: {loss.name}</Styled.h1>
      <Styled.h1>Save: {save ? save.name : ""}</Styled.h1>
      <Styled.h1>HR: {homeruns[0] ? homeruns[0].name : ""}</Styled.h1>
    </div>
  );
};

export default Game;
