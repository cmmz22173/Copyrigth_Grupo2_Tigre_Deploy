import { Module } from '@nestjs/common';
import { LavadorProductoController } from './lavador_producto.controller';
import { LavadorProductoService } from './lavador_producto.service';

@Module({
  controllers: [LavadorProductoController],
  providers: [LavadorProductoService]
})
export class LavadorProductoModule {}
