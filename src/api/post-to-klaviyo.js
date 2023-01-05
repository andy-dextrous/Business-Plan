import axios from "axios"

export default async function handler(req, res) {
  const { email, website, pdf, ip } = req.body

  try {
    const options = {
      method: "POST",
      url: "https://a.klaviyo.com/api/v2/list/XegVHJ/subscribe",
      params: { api_key: "pk_d1241143c0ed2133542746b35654fae1ee" },
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
      data: {
        profiles: [{ email: email, domain: website, pdf: pdf, ip: ip }],
      },
    }

    await axios
      .request(options)
      .then(function (response) {
        console.log(response.data)
        res.send(response.data)
      })
      .catch(function (error) {
        console.error(error)
      })

    res.json(result)
  } catch (error) {
    res.status(500).send(error)
  }
}
