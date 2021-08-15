import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Layout from "../components/layout"
import ContactBanner from "../components/contact-banner"
import ContactForm from "../components/contact-form"
import { faEnvelope,faMapMarkerAlt,faPhoneAlt } from "@fortawesome/free-solid-svg-icons"
import { faAddressCard } from "@fortawesome/free-regular-svg-icons"


const ContactPage = () => {
    return(
        <Layout>
            <ContactBanner />
            <section className="section">
                <div className="container">
                    <div className="columns">
                        <div className="column is-5">
                            <div className="section pt-0 pb-3">
                                <p className="title has-text-weight-light has-text-link is-size-3 is-link">
                                    Send us a message and we will get back to you
                                </p>
                            </div>
                            <div className="section pt-0 pb-0">
                                <ContactForm />
                            </div>
                        </div>
                        <div className="column is-2">
                        </div>
                        <div className="column is-5">
                            <div className="section pt-0 pb-3">
                                <p className="title has-text-weight-light has-text-link is-size-3 is-link">
                                    Reach out to us
                                </p>
                            </div>
                            <div className="section pt-0 pb-3">
                                <table className="table is-borderless">
                                    <tbody>
                                        <tr>
                                            <td><FontAwesomeIcon icon={ faMapMarkerAlt} size="lg" className="font-awesome-color"/></td>
                                            <td>Better World Foundation, <br />Pankipani, Ward-55, <br />Kumhrar House No-464, Maurya Vihar, <br/> Near Transport Nagar, <br />Patna, 800026</td>
                                        </tr>
                                        <tr>
                                            <td><FontAwesomeIcon icon={ faEnvelope} size="lg" className="font-awesome-color"/></td>
                                            <td><a href="mailto:connect@bwf.org.in">connect@bwf.org.in</a></td>
                                        </tr>
                                        <tr>
                                            <td><FontAwesomeIcon icon={ faPhoneAlt} size="lg" className="font-awesome-color"/></td>
                                            <td>+91 9999-999-999</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default ContactPage