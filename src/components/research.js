import React from "react"


const ResearchSection = () => {
    // const [readMore, setReadMore] = React.useState(false);
    // const extraContent=<p className="subtitle is-size-6 is-family-secondary">
    // </p>
    // const linkName=readMore?'Read Less':'Read More';
    return(
        <section className="hero">
                <div className="hero-body container pb-0">
                    <p className="title has-text-weight-light is-size-2">
                        RESEARCH & ANALYTICS
                    </p>
                    <p className="subtitle is-family-secondary">
                    We provide research and analytics services to corporates, academicians and elected representatives. Our goal is to conduct high value research with academic discipline. Research is about bringing the knowledge and experiences from the ground to the clients thus help building truly scalebale social impact solutions. 
                    </p>
                    {/* {readMore && extraContent}
                    <a onClick={() => {setReadMore(!readMore)}}>{linkName}</a> */}
                </div>
            </section>
    )
}

export default ResearchSection