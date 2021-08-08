import React from "react"
import "./mystyles.scss"
import Layout from "../components/layout"
import AboutUs from "../components/about-us"
import OurServices from "../components/our-services"
import MultipleItems from "../components/partners-slider"
import SimpleItems from "../components/image-slider"

const IndexPage = () => {
  return (
    <Layout>
      <SimpleItems />
      <AboutUs />
      <OurServices />
      <MultipleItems />
    </Layout>
  )
}

export default IndexPage
