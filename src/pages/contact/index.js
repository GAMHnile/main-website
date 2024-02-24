import * as React from "react";
import { navigate } from "gatsby-link";
import Layout from "../../components/Layout";
import axios from "axios";

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messageSuccess: false,
      messageError: false,
      name: "",
      email: "",
      message: "",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post("/.netlify/functions/contact", {
      ...this.state,
    });

    if (response.status === 200) {
      this.setState({ name: "", email: "", message: "", messageSuccess: true });
    } else {
      this.setState({ messageError: true });
    }

    setTimeout(() => {
      this.setState({ messageSuccess: false, messageError: false });
    }, 5000);
  };

  render() {
    return (
      <Layout>
        <section className="section" style={{ paddingTop: "8rem" }}>
          <div className="container">
            <div className="content">
              <h1
                className="title is-size-3 has-text-weight-bold is-bold-light has-text-centered"
                style={{ marginBottom: "40px" }}
              >
                Contact Us
              </h1>
              <form
                name="contact"
                method="post"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
              >
                <div className="field">
                  <label className="label" htmlFor={"name"}>
                    Your name
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={"text"}
                      name={"name"}
                      onChange={this.handleChange}
                      id={"name"}
                      required={true}
                      value={this.state.name}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label" htmlFor={"email"}>
                    Email
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={"email"}
                      name={"email"}
                      onChange={this.handleChange}
                      id={"email"}
                      required={true}
                      value={this.state.email}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label" htmlFor={"message"}>
                    Message
                  </label>
                  <div className="control">
                    <textarea
                      className="textarea"
                      name={"message"}
                      onChange={this.handleChange}
                      id={"message"}
                      required={true}
                      value={this.state.message}
                    />
                  </div>
                </div>
                <div className="field">
                  <button
                    className="cta cta-blue is-link"
                    type="submit"
                    style={{ paddingBlock: "8px", marginTop: "5px" }}
                  >
                    Send
                  </button>
                </div>

                {this.state.messageSuccess ? (
                  <p className="success-msg">
                    Your message was sent successfully! We'll be in touch.
                  </p>
                ) : this.state.messageError ? (
                  <p className="error-msg">
                    An error occured while sending message, please try again.
                  </p>
                ) : null}
              </form>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
