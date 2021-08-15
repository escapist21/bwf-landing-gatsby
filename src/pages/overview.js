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
        <section className="section container pb-3">
          <p className="subtitle is-family-secondary has-text-centered is-size-4 has-text-link">
                Better World Foundation has been working  with various stakeholders, corporate partners and elected representatives to empower village communities into a resilient and self-sufficient society. We believe that a healthier, more supportive and economically sound rural society can have a positive social impact on several lives, creating better and equitable livelihood opportunities for all.
          </p>
        </section>
        <AdvisorySection />
        <ResearchSection />
        <SolutionsSection />
      </Layout>
    )
  }
  
  export default OverviewPage