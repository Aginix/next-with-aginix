import { format } from 'date-fns';
import { NextApiRequest, NextApiResponse } from 'next';

export default function statusHandler(req: NextApiRequest, res: NextApiResponse) {
  const date = new Date();

  res.json({
    tag: process.env.TAG_NAME,
    NODE_ENV: process.env.NODE_ENV,
    GRAPHQL_URL: process.env.BASE_URL,
    TZ: process.env.TZ,
    datetime: date,
    datetime_local: format(date, 'yyyy-MM-dd HH:mm:ss'),
    date: format(date, 'yyyy-MM-dd'),
  });
}
