import React from "react";
import useSiteMetadata from '../hooks/use-site-metadata';
import { Link } from "gatsby";
import { Styled } from "theme-ui";

const GameList = ({ games }) => {
  const meta = useSiteMetadata();

  return (
    <>
      <Styled.h1>{meta.headline}</Styled.h1>
      <Styled.ul>
        {games.map(game => (
          <Styled.li key={game.id}>
            <strong>
              <Link to={game.slug}>{game.away.abbreviation} vs {game.home.abbreviation}</Link>
            </strong>
          </Styled.li>
        ))}
      </Styled.ul>
    </>
  );
};

export default GameList;
