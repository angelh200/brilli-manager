import prisma from '../config/db.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export async function login(req, res) {
    const {username, password} = req.body
    try {
        const user = await prisma.usuario.findUnique({
            where: {
                username
            }
        })

        // Aborta si no existe usuario
        if(!user) {return res.status(401).json('Usuario no existe!')}

        const authStatus = await bcrypt.compare(password, user.passwordHash)

        if(!authStatus) {return res.status(401).json('Contraseña incorrecta')}

        console.log('Autenticado con exito', user.username)
        
        const jwtSign = jwt.sign(
            {
                id: user.id,
                rol: user.rol
            },
            process.env.JWT_SECRET,
            {expiresIn: 60*60*24*30}
        )

        // guardar las cookis con el jwtsign
        res.cookie('userToken', jwtSign, {
            maxAge: 1000 * 60 * 60 * 24 * 30,
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production'
        })
        res.status(200).json('Autenticacion correcta!')
    } catch(e) {
        console.error(e)
        return res.status(500).json({error: 'Error interno del servidor'})
    }
}

export function logout(req, res) {
    res.clearCookie('userToken').status(200).json('User logout')
}