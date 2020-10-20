import React, {ReactNode} from "react";
import Layout from "../components/layout";
import {Button, Container} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import {withTranslation, i18n} from "../../../i18n";

type Props = {
  t: (arg0: string) => ReactNode
}

const Index = ({t}: Props) => {

  return (
    <Layout title="Top page.">
      <Container component="main" maxWidth="xs">
        <Box style={{height: 1800}}>
          <h1>{t('greeting')}</h1>
          <Button
            variant="outlined"
            onClick={() => {
              i18n.changeLanguage (
                i18n.language === "en" ? "ja" : "en"
              )
            }}
          >
            {i18n.language}
          </Button>
          <p>Index Page.</p>
        </Box>
      </Container>
    </Layout>
  )
}

Index.getInitialProps = async () => ({
  namespacesRequired: ['common'],
})

export default withTranslation('common')(Index)
