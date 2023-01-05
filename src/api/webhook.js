import axios from "axios"

export default async function handler(req, res) {
  res.send("Hello from the webhook", req.body)
}
