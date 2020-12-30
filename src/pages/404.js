import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "../styles/notFound.module.scss"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" description="Page not found" />
    <div className={styles.not_found_page}>
      <h1>Page not found</h1>
      <p>Oops! The page you are looking for has been removed or relocated.</p>
      <Link to="/">Go Back</Link>
    </div>
  </Layout>
)

export default NotFoundPage
