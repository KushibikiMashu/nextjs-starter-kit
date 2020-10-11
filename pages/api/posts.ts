import { NextApiRequest, NextApiResponse } from 'next'

module.exports = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    const posts = [
      {
        id: 1,
        title: 'React',
        body: 'React is the JavaScript library for building UIs.',
        date: '2020-01-01',
      },
      {
        id: 2,
        title: 'Next.js',
        body: 'Next.js is the framework for React developers.',
        date: '2020-02-01',
      },
    ]

    res.status(200).json({ posts })
    res.end()
  } else {
    res.end(`Invalid method ${req.method}. Only GET is allowed.`)
  }
}
