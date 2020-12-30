import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import Layout from "../components/layout"
import Services from "../components/services"
import heroStyles from "../styles/hero.module.scss"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allContentfulLandingPage {
        edges {
          node {
            contentful_id
            header
            subheader
            description
            backgroundImage {
              fluid(toFormat: PNG) {
                src
                srcSet
                ...GatsbyContentfulFluid
              }
            }
            callToActions {
              id
              name
              slug
            }
          }
        }
      }
    }
  `)

  //  Destructure Data
  const {
    contentful_id,
    header,
    subheader,
    description,
    backgroundImage,
    callToActions,
  } = data.allContentfulLandingPage.edges[0].node

  return (
    <Layout>
      {/* Hero */}
      <section className={heroStyles.hero} key={contentful_id}>
        <BackgroundImage
          fluid={backgroundImage.fluid}
          className={heroStyles.hero_background}
        >
          <div className={heroStyles.hero_overlay}></div>
          <div className={heroStyles.hero_content}>
            <h2>{subheader}</h2>
            <h1>{header}</h1>
            <h3>{description}</h3>
            {/* Call To Actions */}
            <div className={heroStyles.hero_callToActions}>
              {callToActions.map(cta => (
                <Link
                  key={cta.id}
                  to="/"
                  className={heroStyles.hero_callToAction}
                  style={
                    cta.slug === "get-started"
                      ? { backgroundColor: "#2885f6" }
                      : { backgroundColor: "#767D84" }
                  }
                >
                  {cta.name} {String.fromCharCode(0x203a)}
                </Link>
              ))}
            </div>
            <Services />
          </div>
        </BackgroundImage>
      </section>
    </Layout>
  )
}

export default IndexPage
