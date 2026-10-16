import { Router } from 'express'
import crudProduct from '../controllers/productoController.js'
import authMiddleware from '../middlewares/authMiddleware.js'
import validate from '../middlewares/validateMiddleware.js'
import productoSchema from '../schemas/productSchema.js'

const router = Router()

router.post('/', authMiddleware, validate(productoSchema), crudProduct.createProduct)
router.get('/', authMiddleware, crudProduct.readProducts) // lee los productos buscadps
router.get('/:id', authMiddleware, crudProduct.readProductById) // busca por id
router.put('/:id', authMiddleware, validate(productoSchema), crudProduct.updateProduct)
router.delete('/:id', authMiddleware, crudProduct.deleteProduct)


export default router