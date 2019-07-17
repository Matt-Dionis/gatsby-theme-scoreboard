import React from "react";
import ScoreRow from "./score-row";
import { Styled } from "theme-ui";

const gameRowStyle = {
  borderBottom: "1px solid",
  borderColor: "lightgray",
  cursor: "pointer"
};

const GameRow = React.memo(({ game }) => (
  <Styled.li style={gameRowStyle}>
    <Styled.ul>
      <ScoreRow team={game.away} />
      <ScoreRow team={game.home} />
    </Styled.ul>
  </Styled.li>
));

export default GameRow;
