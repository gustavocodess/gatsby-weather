import React from "react"
import { Link } from "gatsby"
import Image from '../components/image'
import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div> */}
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
