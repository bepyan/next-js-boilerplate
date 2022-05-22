import { PrismaClient } from '@prisma/client';

declare global {
  var _prisma: PrismaClient | null;
}

const _prisma = global._prisma || new PrismaClient({ log: ['query'] });

if (process.env.NODE_ENV === 'development') {
  global._prisma = _prisma;
}

export default _prisma;
