import sgMail from "@sendgrid/mail";
import { NextApiRequest, NextApiResponse } from "next";

sgMail.setApiKey(process.env.NEXT_PUBLIC_EMAIL_API_KEY);

export default async (req, res) => {
  const body = req.body;

  const notificationMessage = `
    Name: ${body.name}\r\n
    Email: ${body.email}\r\n
    Message: ${body.message}
  `;

  const notificationData = {
    to: "contact@mllosas.com",
    from: "contact@mllosas.com",
    subject: "MLLOSAS.COM New Contact Form Submission",
    text: notificationMessage,
    html: notificationMessage.replace(/\r\n/g, "<br>"),
    tracking_settings: {
      subscription_tracking: {
        enable: false,
      },
    },
  };

  const confirmationData = {
    to: body.email,
    from: "contact@mllosas.com",
    subject: "It's Manny, I got your message.",
    templateId: "d-ae0d8c859e704ca5bc511779ab0e7184",
    dynamic_template_data: {
      subject: "It's Manny, I got your message.",
      name: body.name,
    },
    tracking_settings: {
      subscription_tracking: {
        enable: false,
      },
    },
  };

  sgMail.send(notificationData);
  sgMail.send(confirmationData);

  res.status(200).json({ status: "Ok" });
};
