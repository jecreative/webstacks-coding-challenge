import React, { useState } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import headerStyles from "../styles/header.module.scss"
import openMenuIcon from "../images/bars-light.svg"
import closeMenuIcon from "../images/times-light.svg"

const Header = () => {
  const [mobileNav, setMobileNav] = useState(false)
  //  Query Data
  const data = useStaticQuery(graphql`
    query {
      allContentfulNavbar {
        edges {
          node {
            logo {
              file {
                url
              }
            }
            navLinks {
              ... on ContentfulCallToAction {
                id
                name
              }
              ... on ContentfulNavLink {
                id
                name
              }
            }
          }
        }
      }
    }
  `)

  // Destructure Data
  const { logo, navLinks } = data.allContentfulNavbar.edges[0].node

  return (
    <header className={headerStyles.header}>
      {/* Logo */}
      <Link to="/" className={headerStyles.logo} aria-label="Brackets logo">
        <img
          src={`https://${logo.file.url}`}
          alt="Brackets logo"
          width="100"
          height="100"
        />
      </Link>
      {/* Navigation */}
      <nav className={headerStyles.mainNav}>
        <ul>
          {navLinks.map(link => (
            <li key={link.id}>
              <Link
                to="/"
                className={
                  link.__typename === "ContentfulCallToAction"
                    ? headerStyles.nav_callToAction
                    : ""
                }
              >
                {link.__typename === "ContentfulCallToAction"
                  ? `${link.name} ${String.fromCharCode(0x203a)}`
                  : link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      {/* Mobile Nav Toggle */}
      <button
        className={headerStyles.mobile_navToggle}
        onClick={() => setMobileNav(!mobileNav)}
      >
        {mobileNav ? (
          <img src={closeMenuIcon} alt="Close menu icon" />
        ) : (
          <img src={openMenuIcon} alt="Open menu icon" />
        )}
      </button>
      {/* Mobvile Nav */}
      <nav
        className={
          mobileNav ? headerStyles.mobile_nav_active : headerStyles.mobile_nav
        }
      >
        <ul>
          {navLinks.map(link => (
            <li key={link.id}>
              <Link
                to="/"
                className={
                  link.__typename === "ContentfulCallToAction"
                    ? headerStyles.nav_callToAction
                    : ""
                }
                onClick={() => setMobileNav(!mobileNav)}
              >
                {link.__typename === "ContentfulCallToAction"
                  ? `${link.name} ${String.fromCharCode(0x203a)}`
                  : link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header
