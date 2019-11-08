import { graphql, StaticQuery } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout'


const getMarkdownPosts = graphql`
{
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date
          }
          excerpt
        }
      }
    }
  }
`

export default () => (
    <Layout>
        <div>
            <h1 style={{ display: 'inlineblock', borderBottom: '1px solid' }}
            >Gatsy Ecommerce Site</h1>
            <StaticQuery
                query={getMarkdownPosts}
                render={data => (
                    <>
                        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
                        {data.allMarkdownRemark.edges.map(({ node }) => (
                            <div key={node.id}>
                                <h3>{node.frontmatter.title} <span style={{ color: '#bbb' }}>- {node.frontmatter.date}</span>
                                </h3>
                                <p>{node.excerpt}</p>
                            </div>
                        ))}
                    </>
                )}
            />
        </div>
    </Layout>
)