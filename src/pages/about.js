import React from "react"

import Layout from "../components/layout"
import Testimonials from "../components/Testimonials"
import Stats from "../components/Stats"
import SEO from "../components/seo"

const About = () => (
  <Layout>
    <SEO title="About Us" />
    <Testimonials />
    <Stats />
  </Layout>
)

export default About
