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
  };

  const confirmationMessage = `
  Thank you for contacting me, this is just a confirmation email to let you know 
  that I've receieved your message and will get back to you as soon as I can. 
  Thanks again!\r\n
`;

  const confirmationData = {
    to: body.email,
    from: "contact@mllosas.com",
    subject: "Thank you for contacting me.",
    text: confirmationMessage,
    html: confirmationMessage.replace(/\r\n/g, "<br>"),
  };

  sgMail.send(notificationData);
  console.log(notificationData);
  sgMail.send(confirmationData);
  console.log(confirmationData);

  res.status(200).json({ status: "Ok" });
};
