import React from "react"

import Layout from "../components/layout"
import Trips from "../components/Trips"
import SEO from "../components/seo"

const TripsPage = () => (
  <Layout>
    <SEO title="Trips" />
    <Trips heading="Most booked Destinations"/>
  </Layout>
)

export default TripsPage
