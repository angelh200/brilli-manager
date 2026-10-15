import 'dotenv/config'
import prisma from '../src/config/db.js'
import bcrypt from 'bcrypt'

async function main() {
    console.log('Iniciando siembra de datos!')

    const username = process.env.USERNAME
    const password = process.env.PASSWORD
    const passwordHash = await bcrypt.hash(password, 10)

    const adminUsuario = await prisma.usuario.create({
        data: {
            username,
            passwordHash
        }
    })

    console.log('Usuario creado correctamente')
}

main().catch((e) => {
    console.error(e)
    process.exit(1)
}).finally(async () => {
    await prisma.$disconnect();
})