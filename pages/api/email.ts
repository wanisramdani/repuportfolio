// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { SMTPClient } from 'emailjs'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

    const { EMAIL_USER, EMAIL_PASSWORD, EMAIL_TO, EMAIL_HOST } = process.env
    
    const client = new SMTPClient({
        user: EMAIL_USER,
        password: EMAIL_PASSWORD,
        host: EMAIL_HOST,
        port: 587,
        ssl: false,
        tls: true,

    })
    

    client.sendAsync({
        text: req.body.message,
        from: "repuchan@outlook.com",
        to: "wanisramdani00@gmail.com",
        subject: req.body.subject + " - " + req.body.email,
    }).then((message) => {
        console.log(message)
        res.status(200).json({ message: "Email sent successfully" })
    }).catch((err) => {
        console.log(err)
        res.status(400).json({ message: "Email failed to send" })
    })
}