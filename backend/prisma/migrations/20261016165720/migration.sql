/*
  Warnings:

  - A unique constraint covering the columns `[nombre]` on the table `Categoria` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[usuarioTiktok]` on the table `Cliente` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[dni]` on the table `Cliente` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[celular]` on the table `Cliente` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[nombre]` on the table `Producto` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[nombre]` on the table `Proveedor` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[usuarioTiktok]` on the table `Proveedor` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Categoria_nombre_key" ON "Categoria"("nombre");

-- CreateIndex
CREATE INDEX "Categoria_nombre_idx" ON "Categoria"("nombre");

-- CreateIndex
CREATE UNIQUE INDEX "Cliente_usuarioTiktok_key" ON "Cliente"("usuarioTiktok");

-- CreateIndex
CREATE UNIQUE INDEX "Cliente_dni_key" ON "Cliente"("dni");

-- CreateIndex
CREATE UNIQUE INDEX "Cliente_celular_key" ON "Cliente"("celular");

-- CreateIndex
CREATE INDEX "Cliente_nombre_idx" ON "Cliente"("nombre");

-- CreateIndex
CREATE INDEX "Cliente_dni_idx" ON "Cliente"("dni");

-- CreateIndex
CREATE INDEX "Compra_userId_idx" ON "Compra"("userId");

-- CreateIndex
CREATE INDEX "Compra_proveedorId_idx" ON "Compra"("proveedorId");

-- CreateIndex
CREATE INDEX "DetalleCompra_compraId_idx" ON "DetalleCompra"("compraId");

-- CreateIndex
CREATE INDEX "DetalleCompra_productoId_idx" ON "DetalleCompra"("productoId");

-- CreateIndex
CREATE INDEX "DetalleVenta_ventaId_idx" ON "DetalleVenta"("ventaId");

-- CreateIndex
CREATE INDEX "DetalleVenta_productoId_idx" ON "DetalleVenta"("productoId");

-- CreateIndex
CREATE INDEX "Pedido_clientId_idx" ON "Pedido"("clientId");

-- CreateIndex
CREATE UNIQUE INDEX "Producto_nombre_key" ON "Producto"("nombre");

-- CreateIndex
CREATE UNIQUE INDEX "Proveedor_nombre_key" ON "Proveedor"("nombre");

-- CreateIndex
CREATE UNIQUE INDEX "Proveedor_usuarioTiktok_key" ON "Proveedor"("usuarioTiktok");

-- CreateIndex
CREATE INDEX "Proveedor_nombre_idx" ON "Proveedor"("nombre");

-- CreateIndex
CREATE INDEX "Venta_userId_idx" ON "Venta"("userId");

-- CreateIndex
CREATE INDEX "Venta_pedidoId_idx" ON "Venta"("pedidoId");
