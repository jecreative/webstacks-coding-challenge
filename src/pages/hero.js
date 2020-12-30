// import React from "react"
// import { graphql, useStaticQuery, Link } from "gatsby"

// import Layout from "../components/layout"
// import Services from "../components/services"
// import styles from "../styles/hero.module.scss"

// const IndexPage = () => {
//   const data = useStaticQuery(graphql`
//     query MyQuery {
//       allContentfulLandingPage {
//         edges {
//           node {
//             contentful_id
//             header
//             subheader
//             description
//             backgroundImage {
//               file {
//                 url
//               }
//             }
//             callToActions {
//               id
//               name
//               slug
//             }
//           }
//         }
//       }
//     }
//   `)

//   //  Destructure Data
//   const {
//     contentful_id,
//     header,
//     subheader,
//     description,
//     backgroundImage,
//     callToActions,
//   } = data.allContentfulLandingPage.edges[0].node

//   return (
//     <Layout>
//       {/* Hero */}
//       <section
//         className={styles.hero}
//         key={contentful_id}
//         style={{
//           backgroundImage: `url('https://${backgroundImage.file.url}')`,
//         }}
//       >
//         <div className={styles.overlay}></div>
//         <div className={styles.hero_content}>
//           <h2>{subheader}</h2>
//           <h1>{header}</h1>
//           <h3>{description}</h3>
//           {/* Call To Actions */}
//           <div className={styles.hero_callToActions}>
//             {callToActions.map(cta => (
//               <Link
//                 key={cta.id}
//                 to="/"
//                 className={styles.hero_callToAction}
//                 style={
//                   cta.slug === "get-started"
//                     ? { backgroundColor: "#2885f6" }
//                     : { backgroundColor: "#767D84" }
//                 }
//               >
//                 {cta.name} {">"}
//               </Link>
//             ))}
//           </div>
//           <Services />
//         </div>
//       </section>
//     </Layout>
//   )
// }

// export default IndexPage
