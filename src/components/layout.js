import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"

import "../styles/global.scss"
import SEO from "./seo"
import Header from "./header"

const Layout = ({ children }) => {
  return (
    <div style={{ position: "relative" }}>
      {/* Google Font */}
      <Helmet>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <SEO
        title="Webstacks Coding Challenge"
        description="A simple landing page built with Gatsby and Contentful as part of the Webstacks coding challenge."
      />
      <Header />
      <main>{children}</main>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
