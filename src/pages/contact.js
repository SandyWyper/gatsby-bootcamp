import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"

export default function Contact() {
  return (
    <div>
      <Layout>
        <Head title="contact" />
        <h1>Get in touch</h1>
        <h4>
          Email: <a href="mailto:sandywyper@gmail.com">sandywyper@gmail.com</a>
        </h4>
        <h4>
          Call: <a href="tel:+447853835718">07853&nbsp;825&nbsp;718</a>
        </h4>
      </Layout>
    </div>
  )
}
