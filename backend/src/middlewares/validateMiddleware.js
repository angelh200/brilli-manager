function validate(schema) {
    return (req, res, next) => {
        const result = schema.safeParse(req.body)

        if(!result.success) {
            return res.status(400).json({
                error: 'Datos invalidos',
                msg: result.error.format()
            })
        }

        // los daos se validaron correctamente y pasamos datos limpios
        req.body = result.data
        next()
    }
}

export default validate