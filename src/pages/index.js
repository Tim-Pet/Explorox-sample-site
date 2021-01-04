import React from "react"

import Layout from "../components/layout"
import Hero from "../components/Hero"
import Trips from "../components/Trips"
import Testimonials from "../components/Testimonials"
import Stats from "../components/Stats"
import Email from "../components/Email"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Trips heading="Most booked Destinations"/>
    <Testimonials />
    <Stats />
    <Email />
  </Layout>
)

export default IndexPage
