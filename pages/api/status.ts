import { NextApiRequest, NextApiResponse } from 'next';

export default function statusHandler(req: NextApiRequest, res: NextApiResponse) {
  res.json({
    NODE_ENV: process.env.NODE_ENV,
    GRAPHQL_URL: process.env.GRAPHQL_URL,
    MINIO_ENDPOINT: process.env.MINIO_ENDPOINT,
    MINIO_BUCKET: process.env.MINIO_BUCKET,
    timestamp: new Date(),
  });
}