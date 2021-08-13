import React from "react"
import SolutionDetails from "./solution-details";

const SolutionsSection = () => {
    const [readMore, setReadMore] = React.useState(false);
    const extraContent=<SolutionDetails/>
    const linkName=readMore?'Read Less':'Read More';
    return(
        <section className="hero">
                <div className="hero-body container">
                    <p className="title has-text-weight-light is-size-2">
                        EVIDENCE-BASED SOLUTIONS
                    </p>
                    <p className="subtitle is-family-secondary">
                    We create solutions to persisting problems and prevailing limitations in rural society. Our goal is to enhance life experiences and augment proven systems. Solutions are about efficiency and experience. Partnering with different stakeholders, we take the knowledge to society.
                    </p>
                    {readMore && extraContent}
                    <a onClick={() => {setReadMore(!readMore)}}>{linkName}</a>
                </div>
            </section>
    )
}

export default SolutionsSection