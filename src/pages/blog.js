import React from "react"
import Layout from "../components/layout"
import { Link, graphql, useStaticQuery } from "gatsby"
import blogStyles from "./blog.module.scss"
import Head from "../components/head"

export default function BlogPage() {
  const blogPosts = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
            body {
              json
            }
          }
        }
      }
    }
  `)

  return (
    <div>
      <Layout>
        <Head title="blog" />
        <h1>Blog</h1>
        <ol className={blogStyles.posts}>
          {blogPosts.allContentfulBlogPost.edges.map((item, index) => {
            return (
              <li key={index}>
                <Link to={`/blog/${item.node.slug}`}>
                  <h2>{item.node.title}</h2>
                  <p>{item.node.publishedDate}</p>
                </Link>
              </li>
            )
          })}
        </ol>
      </Layout>
    </div>
  )
}
