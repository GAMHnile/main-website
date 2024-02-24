require("dotenv").config();
const {
  GATSBY_MAILGUN_API_KEY,
  GATSBY_MAILGUN_DOMAIN,
  GATSBY_MAILGUN_URL,
  GATSBY_TO_EMAIL_ADDRESS,
  GATSBY_FROM_EMAIL_ADDRESS,
} = process.env;
const mailgun = require("mailgun-js")({
  apiKey: GATSBY_MAILGUN_API_KEY,
  domain: GATSBY_MAILGUN_DOMAIN,
  //   url: MAILGUN_URL,
});

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: "Method Not Allowed",
      headers: { Allow: "POST" },
    };
  }

  const data = JSON.parse(event.body);
  if (!data.message || !data.name || !data.email) {
    return { statusCode: 422, body: "Name, email, and message are required." };
  }

  const mailgunData = {
    from: GATSBY_FROM_EMAIL_ADDRESS,
    to: GATSBY_TO_EMAIL_ADDRESS,
    subject: `New message from ${data.name}`,
    text: `Name: ${data.email}\nEmail: ${data.contactEmail}\nMessage: ${data.message}`,
  };

  return mailgun
    .messages()
    .send(mailgunData)
    .then(() => ({
      statusCode: 200,
      body: "Your message was sent successfully! We'll be in touch.",
    }))
    .catch((error) => ({
      statusCode: 422,
      body: `Error: ${error}`,
    }));
};
