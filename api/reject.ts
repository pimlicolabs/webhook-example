import type { VercelRequest, VercelResponse } from '@vercel/node'

export default function handler(req: VercelRequest, res: VercelResponse) {
  console.log(`Reject request received`);
  console.log(req.body);

  return res.status(200).json({
    sponsor: false,
  })
}
