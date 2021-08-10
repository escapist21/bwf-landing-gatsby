import React from "react"
import "./mystyles.scss"
import Layout from "../components/layout"
import OurWorkSection from "../components/our-work"
import AdvisorySection from "../components/advisory"
import ResearchSection from "../components/research"
import SolutionsSection from "../components/solutions"

const OverviewPage = () => {
    return (
      <Layout>
        <OurWorkSection />
        <AdvisorySection />
        <ResearchSection />
        <SolutionsSection />
      </Layout>
    )
  }
  
  export default OverviewPage