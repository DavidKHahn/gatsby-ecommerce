import { Link } from "gatsby"
import React from "react"
import Image from "../components/image"
import Layout from "../components/layout"
import SEO from "../components/seo"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Ice Cold Chocolates</h1>
    <p>Everything you need all in the palm of your hands.</p>
    <p>Now go be lazy while our AI takes care of your everyday needs including your career.</p>
    <div style={{ maxWidth: `590px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
