import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'
import PG from 'pg'

const { Pool } = PG
const connectionString = process.env.DATABASE_URL

const pool = new Pool({ connectionString })
const adapter = new PrismaPg(pool)

// Creamos la instancia de prisma
const prisma = new PrismaClient({ adapter })

export default prisma