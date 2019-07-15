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
            abbreviation
            score
          }
          away {
            abbreviation
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
    }
  `);

  const games = data.allGame.nodes;

  return (
    <Layout>
      <GameList games={games} />
    </Layout>
  );
};

export default GamesTemplate;
