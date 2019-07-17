import GameList from "../components/game-list";
import GamesContext from "../GamesContext";
import Layout from "../components/layout";
import React from "react";
import { graphql } from "gatsby";

export const query = graphql`
  query {
    allGame {
      nodes {
        id
        date
        venue
        slug
        home {
          name
          abbreviation
          isWinner
          score
        }
        away {
          name
          abbreviation
          isWinner
          score
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
      }
    }
    allImageSharp {
      nodes {
        id
        fixed(height: 64, width: 64) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

const GamesTemplate = React.memo(({ data: { allGame, allImageSharp } }) => (
  <GamesContext.Provider
    value={{
      games: allGame.nodes,
      logos: allImageSharp.nodes
    }}
  >
    <Layout>
      <GameList />
    </Layout>
  </GamesContext.Provider>
));

export default GamesTemplate;
