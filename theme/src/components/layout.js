import React from "react";
import useSiteMetadata from "../hooks/use-site-metadata";
import { Link } from 'gatsby';
import { Layout as ThemeLayout, Header, Main, Container } from "theme-ui";

const Layout = ({ children }) => {
  const meta = useSiteMetadata();

  return (
    <ThemeLayout>
      <Header>
        <Link to={meta.basePath}>{meta.title}</Link>
      </Header>
      <Main>
        <Container>{children}</Container>
      </Main>
    </ThemeLayout>
  );
};

export default Layout;
