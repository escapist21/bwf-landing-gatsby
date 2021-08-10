import React from "react"


const AdvisorySection = () => {
    const [readMore, setReadMore] = React.useState(false);
    const extraContent=<p className="subtitle is-size-6 is-family-secondary">
        We aim to influence existing and upcoming policies to uphold, scale and sustain the empowerment of individuals from the most marginalized communities. Better World Foundation engages with policy makers and alliances to build support for the marginalized communities. Building on the work done over the past few years, the BWF focuses on developing outcome-based thematic strategies for the sectors we operate in. The organisation works on developing knowledge products to advocate on various issues affecting the marginalised communities.
    </p>
    const linkName=readMore?'Read Less':'Read More';

    return(
        <section className="hero">
            <div className="hero-body container pb-0">
                <p className="title has-text-weight-light is-size-2">
                    ADVISORY & PROJECT MANAGEMENT
                </p>
                <p className="subtitle is-family-secondary">
                We combine the best of management and leadership skills of talented professionals with in-depth on ground experiences and network. We work with the public and private sector partners to conceptualize, design and implement projects that fuel an inclusive and sustainable growth.
                </p>
                {readMore && extraContent}         
                <a onClick={() => {setReadMore(!readMore)}}>{linkName}</a>
                
            </div>
        </section>
    )
}

export default AdvisorySection