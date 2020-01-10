import React from "react";
import styled from "styled-components";

import PageLayout from "../containers/page-layout";
import SEO from "../components/seo";

const NotFoundPage = () => (
  <PageLayout>
    <SEO title="404: Not found" />
    <Container>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <p>As always in life, if you get lost look to the big floating pencil!</p>
    </Container>
  </PageLayout>
);

export default NotFoundPage;

const Container = styled.div`
  text-align: center;
`;
