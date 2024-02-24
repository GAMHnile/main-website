require("dotenv").config();
const {
  GATSBY_MAILGUN_API_KEY,
  GATSBY_MAILGUN_DOMAIN,
  GATSBY_TO_EMAIL_ADDRESS,
} = process.env;
const mailgun = require("mailgun-js")({
  apiKey: GATSBY_MAILGUN_API_KEY,
  domain: GATSBY_MAILGUN_DOMAIN,
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
  if (!data?.message || !data?.name || !data?.email) {
    return { statusCode: 422, body: "Name, email, or message is required." };
  }
  const { message, email, name } = data;
  const mailgunData = {
    from: email,
    to: GATSBY_TO_EMAIL_ADDRESS,
    subject: `New message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  return mailgun
    .messages()
    .send(mailgunData)
    .then(() => ({
      status: "success",
      statusCode: 200,
      body: "Your message was sent successfully! We'll be in touch.",
    }))
    .catch((error) => ({
      statusCode: 422,
      body: `Error: ${error}`,
    }));
};
