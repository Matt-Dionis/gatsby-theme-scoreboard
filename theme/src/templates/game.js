import Game from "../components/game";
import GameContext from "../GameContext";
import Layout from "../components/layout";
import React from "react";
import { graphql } from "gatsby";

export const query = graphql`
  query($gameID: String!) {
    game(id: { eq: $gameID }) {
      date
      venue
      home {
        name
        abbreviation
        wins
        losses
        innings
      }
      away {
        name
        abbreviation
        wins
        losses
        innings
      }
      win {
        name
        note
      }
      loss {
        name
        note
      }
      save {
        name
        note
      }
      homeruns {
        name
        count
        seasonTotals {
          homeruns
          runs
          rbi
        }
      }
    }
  }
`;

const GameTemplate = React.memo(({ data: { game } }) => (
  <GameContext.Provider value={{ ...game }}>
    <Layout>
      <Game />
    </Layout>
  </GameContext.Provider>
));

export default GameTemplate;
