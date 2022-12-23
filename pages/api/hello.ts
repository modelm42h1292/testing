// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
const superagent = require('superagent')


type Data = {
  name: string
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  // const thing = String(req.query.string)
  // superagent.get(`https://www.dnd5eapi.co/api/${thing}`)
  res.status(200).json({Data})
}
