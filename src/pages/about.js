import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

export default function About() {
  return (
    <div>
      <Layout>
        <Head title="about" />
        <h1>About</h1>
        <p>I'm just a boy, trying to learn React and Gatsby</p>
        <a
          href="https://www.gatsbyjs.org/tutorial/part-zero/"
          target="_blank"
          rel="noopener noreferrer"
        >
          External link to learning Gatsby
        </a>
        <br />
        <Link to="/contact">Contact</Link>
      </Layout>
    </div>
  )
}
