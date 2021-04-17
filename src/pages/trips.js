import React from "react"

import Layout from "../components/Layout"
import Trips from "../components/Trips"
import SEO from "../components/Seo"

const TripsPage = () => (
  <Layout>
    <SEO title="Trips" />
    <Trips heading="Most booked Destinations"/>
  </Layout>
)

export default TripsPage
