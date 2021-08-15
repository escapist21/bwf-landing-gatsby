import { div } from "prelude-ls"
import React from "react"

const ContactForm = () => {
    return(
        <div className="container">
            <form target="_blank" action="37809683ef3811a505967ac87366366b" method="POST">
                <div className="field">
                    <label className="label">Name</label>
                    <div className="control">
                        <input className="input" type="text" placeholder="Enter name"></input>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Email</label>
                    <div className="control">
                        <input className="input" type="email" placeholder="Enter email" />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Phone number</label>
                    <div className="control">
                        <input className="input" type="text" placeholder="Enter phone number"></input>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Message body</label>
                    <div className="control">
                    <textarea class="textarea" placeholder="Enter message body"></textarea>
                    </div>
                </div>
                <button type="submit" class="button is-warning is-size-6">Submit</button>
            </form>
        </div>
    )
}

export default ContactForm