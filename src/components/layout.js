import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

import "../styles/global.scss"
import SEO from "./seo"
import Header from "./header"

const Layout = ({ children }) => {
  // Query Site Metadata
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `)
  // Destructure data
  const { title, description, author } = data.site.siteMetadata

  return (
    <>
      {/* Metadata */}
      <Helmet>
        <title>{title ? title : "Webstacks Coding Challenge"}</title>
        <meta name="description" content={description} />
        <meta name="author" content={author} />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      {/* Header */}
      <SEO />
      <Header />
      {/* Main */}
      <main>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
