/*
  Warnings:

  - You are about to alter the column `costoUnitario` on the `DetalleCompra` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(65,30)`.
  - You are about to drop the column `precioUnitario` on the `DetalleVenta` table. All the data in the column will be lost.
  - You are about to alter the column `precioEnvio` on the `Pedido` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(65,30)`.
  - You are about to alter the column `costoUnitario` on the `Producto` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(65,30)`.
  - You are about to alter the column `precioVenta` on the `Venta` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(65,30)`.
  - Added the required column `fechaActualizacion` to the `Categoria` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fechaActualizacion` to the `Cliente` table without a default value. This is not possible if the table is not empty.
  - Added the required column `costoUnitario` to the `DetalleVenta` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fechaActualizacion` to the `Producto` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fechaActualizacion` to the `Proveedor` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Categoria" ADD COLUMN     "fechaActualizacion" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Cliente" ADD COLUMN     "fechaActualizacion" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "DetalleCompra" ALTER COLUMN "costoUnitario" SET DATA TYPE DECIMAL(65,30);

-- AlterTable
ALTER TABLE "DetalleVenta" DROP COLUMN "precioUnitario",
ADD COLUMN     "costoUnitario" DECIMAL(65,30) NOT NULL;

-- AlterTable
ALTER TABLE "Pedido" ALTER COLUMN "precioEnvio" SET DATA TYPE DECIMAL(65,30);

-- AlterTable
ALTER TABLE "Producto" ADD COLUMN     "fechaActualizacion" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "costoUnitario" SET DATA TYPE DECIMAL(65,30);

-- AlterTable
ALTER TABLE "Proveedor" ADD COLUMN     "fechaActualizacion" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Venta" ALTER COLUMN "precioVenta" SET DATA TYPE DECIMAL(65,30);
