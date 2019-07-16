import React from "react";
import ScoreRow from "./score-row";
import { Styled } from "theme-ui";

const gameRowStyle = {
  borderBottom: "1px solid",
  borderColor: "lightgray",
  cursor: "pointer"
};

const GameRow = ({ game, logos }) => {
  return (
    <Styled.li style={gameRowStyle}>
      <Styled.ul>
        <ScoreRow team={game.away} logos={logos} />
        <ScoreRow team={game.home} logos={logos} />
      </Styled.ul>
    </Styled.li>
  );
};

export default GameRow;
