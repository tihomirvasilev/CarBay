import React from "react";

import { Container } from "react-bootstrap";
import Layout from "../../components/layout";
import AdsList from "../../components/ads-list";

const MyAdsPage = () => {
  //TODO: fileter my ads
  return (
    <Layout>
      <Container>
        <AdsList />
      </Container>
    </Layout>
  );
};

export default MyAdsPage;
