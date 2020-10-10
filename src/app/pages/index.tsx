import React from "react";
import Layout from "../components/layout";
import {Container} from "@material-ui/core";
import Box from "@material-ui/core/Box";

const Index = () => {

  return (
    <Layout>
      <Container component="main" maxWidth="xs">
        <Box style={{height: 1800}}>
          <p>Index Page.</p>
        </Box>
      </Container>
    </Layout>
  )
}

export default Index
