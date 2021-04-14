import { graphql } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout'

export default function blogDetails({data}) {

    const {html}=data.markdownRemark
    const {title,tema}=data.markdownRemark.frontmatter

    return (
        <Layout>
            <div className="page-container">
                <h2>{title}</h2>
                <h3>{tema}</h3>
                <div dangerouslySetInnerHTML={{__html:html}}/>
            </div>
        </Layout>
    )
}

export const query= graphql`
query MyQueryDetails($slug: String) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      html
      frontmatter {
        title
        temas
      }
    }
  }
`