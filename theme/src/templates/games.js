import GameList from "../components/game-list";
import Layout from "../components/layout";
import React from "react";
import { graphql, useStaticQuery } from "gatsby";

const GamesTemplate = () => {
  const data = useStaticQuery(graphql`
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
  `);

  const games = data.allGame.nodes;
  const logos = data.allImageSharp.nodes;

  return (
    <Layout>
      <GameList games={games} logos={logos} />
    </Layout>
  );
};

export default GamesTemplate;
