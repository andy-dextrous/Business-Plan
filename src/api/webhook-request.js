import nodemailer from "nodemailer"

export default function handler(req, res) {
  const { body } = req

  // email body to me
  const transporter = nodemailer.createTransport({
    host: "mail.wildcreative.com.au",
    port: 465,
    secure: true,
    auth: {
      user: "andrew@wildcreative.com.au",
      pass: "R0bmach@d0",
    },
  })

  const mailOptions = {
    from: "andrew@wildcreative.com.au",
    to: "andrew.scrivens@hotmail.com",
    subject: "New Webhook Request",
    text: JSON.stringify(body),
  }

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error)
    } else {
      console.log("Email sent: " + info.response)
    }
  })

  res.status(200).send({ ...body })
}
