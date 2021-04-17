import React from "react"

import Layout from "../components/Layout"
import Testimonials from "../components/Testimonials"
import Stats from "../components/Stats"
import SEO from "../components/Seo"

const About = () => (
  <Layout>
    <SEO title="About Us" />
    <Testimonials />
    <Stats />
  </Layout>
)

export default About
