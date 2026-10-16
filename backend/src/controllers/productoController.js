import prisma from '../config/db.js'

async function createProduct(req, res) {
    const producto = req.body

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

async function readProducts(req, res) {
    const search = req.query.nombre
    const pagina = parseInt(req.query.page) || 1
    const limite = parseInt(req.query.limit) || 10

    // si no hay search no ha filtro y busca todos los productos
    let filter = {}


    if(search) {
        filter = {
            nombre: {
                contains: search,
                mode: 'insensitive'
            }
        }
    }

    try {
        const productos = await prisma.producto.findMany({
            where: filter,
            skip: (pagina -1) * limite,
            take: limite,
            orderBy: {
                nombre: "asc"
            }
        })

        const totalProductos = await prisma.producto.count({
            where: filter
        })

        const totalPaginas = Math.ceil(totalProductos / limit)

        return res.status(200).json({
            data: productos,
            metadata: {
                totalProductos,
                page,
                limit,
                totalPaginas
            }
        })
    } catch(e) {
        return res.status(500).json({
            msg: 'Error interno del servidor',
            error: e
        })
    }
}

async function readProductById(req, res) {
    const productId = parseInt(req.params.id)

    if(isNaN(productId)) {
        return res.status(400).json('El id no es valido')
    }

    try {
        const producto = await prisma.producto.findUnique({
            where: { id: productId }
        })

        if(!producto) {
            return res.status(404).json('El producto no existe')
        }

        return res.status(200).json(producto)
    } catch(e) {
        return res.status(500).json({
            msg: 'Error interno del servidor',
            error: e
        })
    }

}

async function updateProduct(req, res) {
    const idProduct = parseInt(req.params.id)

    if(isNaN(idProduct)) {
        return res.status(400).json('El id no es valido!')
    }

    try {
        const product = await prisma.producto.update({
            where: { id: idProduct },
            data: {...req.body}
        })
    
        return res.status(200).json(product)
    } catch(e) {
        if(e.code === 'P2025') {
            return res.status(404).json('El producto no existe!')
        } else {
            return res.status(500).json({
                msg: 'Error interno del servidor',
                error: e
            })
        }
    }

}

async function deleteProduct(req, res) {
    const idProduct = parseInt(req.params.id)

    if(isNaN(idProduct)) {
        return res.status(400).json('El id no es valido!')
    }

    try {
        const producto = await prisma.producto.delete({
            where: { id: idProduct }
        })
        return res.status(200).json('El producto fue eliminado correctamente')
    } catch(e) {
        if(e.code === 'P2025') {
            return res.status(404).json('El producto no existe!')
        } else {
            return res.status(500).json({
                msg: 'Error interno del servidor',
                error: e
            })
        }
    }

}

export default {
    createProduct,
    readProductById,
    readProducts,
    updateProduct,
    deleteProduct
}