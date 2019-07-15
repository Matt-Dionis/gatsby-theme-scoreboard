import Game from "../components/game";
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

const GameTemplate = ({ data: { game } }) => (
  <Layout>
    <Game {...game} />
  </Layout>
);

export default GameTemplate;
