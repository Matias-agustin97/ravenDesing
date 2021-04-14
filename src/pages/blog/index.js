import React from 'react'
import Layout from '../../components/Layout'
import { Link, graphql } from 'gatsby'
import '../../styles/global.css'
export default function index({data}) {
    const projects = data.allMarkdownRemark.nodes


    return (
       <Layout>
            <div className='page-container'>
            <div >
        
        <div >
          {projects.map(project => (
            <Link to={"/blog/" + project.frontmatter.slug} key={project.id}>
              <div>
                <h3>{ project.frontmatter.title }</h3>
                <h5>{project.frontmatter.date}</h5>
                <h4>{ project.frontmatter.temas }</h4>
              </div>
            </Link>
          ))}
        </div>
      </div>
            </div>
       </Layout>
    )
}



// export page query
export const query = graphql`
  query ProjectsPage {
    allMarkdownRemark(sort: {order: DESC, fields: frontmatter___date}) {
      nodes {
        frontmatter {
          slug
          temas
          title
          date
        }
        id
      }
    }
  }
`