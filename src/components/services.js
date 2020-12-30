import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import servicesStyles from "../styles/services.module.scss"

const Services = () => {
  // Query Services Data
  const data = useStaticQuery(graphql`
    query {
      allContentfulService(sort: { order: ASC, fields: contentful_id }) {
        edges {
          node {
            contentfulid
            name
            description {
              description
            }
            image {
              fluid(quality: 100) {
                src
                srcSet
                ...GatsbyContentfulFluid
              }
            }
          }
        }
      }
    }
  `)

  // Destructure data
  const services = data.allContentfulService.edges.map(service => service)

  return (
    <div className={servicesStyles.services}>
      {services.map((service, index) => (
        // Service Card
        <div key={index} className={servicesStyles.service_card}>
          <Img
            fluid={service.node.image.fluid}
            className={servicesStyles.service_img}
            style={{ position: "absolute" }}
          />
          <strong>{service.node.name}</strong>
          <p>{service.node.description.description}</p>
          <Link to="/">Learn More {String.fromCharCode(0x203a)}</Link>
        </div>
      ))}
    </div>
  )
}

export default Services
