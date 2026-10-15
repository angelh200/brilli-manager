import prisma from '../config/db.js'

export async function createProduct(req, res) {
    const producto = req.body
    console.log(producto)

    try {
        const nuevoProducto = await prisma.producto.create({
            data: {...producto}
        })

        return res.status(201).json(nuevoProducto)
    } catch(e) {
        return res.status(500).json({
            msg: 'No se puedo crear el producto',
            error: e
        })
    }
}

export async function readProduct(req, res) {}

export async function updateProduct(req, res) {}

export async function deleteProduct(req, res) {}
