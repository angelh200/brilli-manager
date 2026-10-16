import { z } from 'zod'

const productoSchema = z.object({
    nombre: z.string().min(3, 'El nombre debe tener al menos 3 caracteres'),
    descripcion: z.string().nullish(),
    imagen: z.string().nullish(),
    stockActual: z.coerce.number().int().nonnegative('El stock no puede ser negativo'),
    costoUnitario: z.coerce.number().positive('El costo debe ser mayor a 0'),
    categoriaId: z.coerce.number().int().positive('Categoria debe ser mayor a 0')
})

export default productoSchema