import React from "react"
import Airform from "react-airform"

// const formsubmit = "ef4a883d4e661aecf08301bf355eddba"
const ContactForm = () => {
    return(
        <div className="container">
            <form target="_blank" action="ef4a883d4e661aecf08301bf355eddba" method="POST">
                <div className="field">
                    <label className="label">Name</label>
                    <div className="control">
                        <input className="input" name="name" type="text" placeholder="Enter name"></input>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Email</label>
                    <div className="control">
                        <input className="input" name="email" type="email" placeholder="Enter email" />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Phone number</label>
                    <div className="control">
                        <input className="input" name="phone_num" type="text" placeholder="Enter phone number"></input>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Message body</label>
                    <div className="control">
                    <textarea className="textarea" name="message" placeholder="Enter message body"></textarea>
                    </div>
                </div>
                <button type="submit" className="button is-warning is-size-6">Submit</button>
            </form>
        </div>
    )
}

export default ContactForm