import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    
      <Layout pageTitle="Home Page">
        <p>Fuck les raccourcis</p>
        <StaticImage
          alt="zen"
          src='../images/zen.jpg'/>
      </Layout>
     
    
  )
}

export default IndexPage