import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import styles from "../styles/service.module.scss"

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
            slug
            image {
              file {
                url
              }
            }
          }
        }
      }
    }
  `)

  // Destructure and Sort Data
  const services = data.allContentfulService.edges.map(service => service)

  return (
    <div className={styles.services}>
      {services.map((service, index) => (
        <div key={index} className={styles.service_card}>
          <div
            className={styles.service_img}
            style={{
              backgroundImage: `url('https://${service.node.image.file.url}')`,
              backgroundSize: "contain",
              backgroundPosition: "right",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <strong>{service.node.name}</strong>
          <p>{service.node.description.description}</p>
          <Link to={`/${service.node.slug}`}>Learn More {">"}</Link>
        </div>
      ))}
    </div>
  )
}

export default Services
