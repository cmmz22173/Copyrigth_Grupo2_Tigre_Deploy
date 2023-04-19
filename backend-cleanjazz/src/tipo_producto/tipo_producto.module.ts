import { Module } from '@nestjs/common';
import { TipoProductoController } from './tipo_producto.controller';
import { TipoProductoService } from './tipo_producto.service';

@Module({
  controllers: [TipoProductoController],
  providers: [TipoProductoService]
})
export class TipoProductoModule {}
