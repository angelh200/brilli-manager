import jwt from 'jsonwebtoken'

function authMiddleware(req, res, next) {
    const userToken = req.cookies.userToken

    if(!userToken) {
        return res.status(401).json('Usuario sin registrar')
    }

    try {
        const user = jwt.verify(userToken, process.env.JWT_SECRET)
        req.user = user
        next()
    } catch(e) {
        return res.status(401).json(e)
    }
    
}

export default authMiddleware