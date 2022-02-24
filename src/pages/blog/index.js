import * as React from 'react'
import Layout from '../../components/layout'
import { Link, graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

const BlogPage = ({data}) => { 
  return (
    <Layout pageTitle="My Blog Posts">
      
          {
              data.allMdx.nodes.map(node => (
                  <article key={node.id}>
                    <h2>
                      <Link to={`/blog/${node.slug}`}>
                        {node.frontmatter.title}
                      </Link>
                    </h2>
                    <p>posted: {node.frontmatter.datePublished} </p>
                     
                  </article>
                  
              ))
          }
      
    </Layout>
  )
}
export const query = graphql`
query {
    allMdx(sort: {fields: frontmatter___datePublished, order: DESC}) {
      nodes {
        frontmatter {
          datePublished(formatString: "D MM YYYY")          
          author
          title
        }
        id
        slug
      }
    }
  }
`

export default BlogPage