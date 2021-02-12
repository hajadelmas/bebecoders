import React from "react"
import { Link, graphql } from "gatsby"
import Img from 'gatsby-image'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({data}) => {

  
  const products = data.allDatoCmsProduct
  console.log(products)


  return(
  <Layout>
    
    
    <SEO title="Home" />

    <main className='grid-container'>
      {
        products.edges.map(({node: product}) => (

          <article  key={product.id} className='grid-item'>
            <h2>{product.name}</h2>
            <Img fluid={product.image.fluid}></Img>
            <p>{product.price}</p>
            <a 
            href="#"
            className='snipcart-add-item'
            data-item-id={product.id}
            data-item-price={product.price}
            data-item-image={product.image.url}
            data-item-name={product.name}
            data-item-url='/'
            >Ajouter au panier</a>
          </article>
          
        ))
      }
    </main>
    
  </Layout>
  )

}



export default IndexPage

export const query = graphql`
  query ProductsQuery {
    allDatoCmsProduct {
      edges {
        node {
          id
          name
          price
          image {
            url
            fluid(maxWidth: 600) {
              ... GatsbyDatoCmsFluid
            }
          }
        }
      }
    }
  }
`
