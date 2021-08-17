import React from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"

export default class MailChimpForm extends React.Component {
    constructor() {
      super()
      this.state = { email: "", result: null }
    }
    _handleSubmit = async e => {
      e.preventDefault()
      const result = await addToMailchimp(this.state.email)
      if (result.result === "error") {
          alert(`Whoops, ${this.state.email} you're already subscribed!`)
      } else {
          alert(`Than you for subscribing ${this.state.email}!`)
      }
      this.setState({result: result})
    }
    handleChange = event => {
      this.setState({ email: event.target.value })
    }
  render() {
      return (
        <div className="container">
            <p className="title has-text-centered has-text-white has-text-weight-light is-uppercase is-size-3">
                Subscribe to our mailing list
            </p>
            <div className="column is-4 is-offset-4 pb-5">
                <form onSubmit={this._handleSubmit}>
                    <div className="field is-grouped">
                        <p className="control is-expanded">
                            <input className="input" name="email" type="email" placeholder="Enter your email" onChange={this.handleChange} />
                        </p>
                        <button type="submit" className="button is-warning is-size-6">Submit</button>
                    </div>
                </form>
            </div>
        </div>

      )
    }
  }