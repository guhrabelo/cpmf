import * as React from "react"

import Layout from "../components/Layout"
import Seo from "../components/seo"
import Card from "../components/Card"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Welcome to your new Gatsby site.</h1>
    <p>
      This is a sample site built with Gatsby.
      Gatsby Documentation
    </p>
    <Card />
  </Layout>
)
export default IndexPage
