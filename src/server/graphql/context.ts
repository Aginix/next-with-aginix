import { PrismaClient } from '.prisma/client';
import { NextApiRequest } from 'next';

export interface Context {
  req: NextApiRequest;
  prisma: PrismaClient
}