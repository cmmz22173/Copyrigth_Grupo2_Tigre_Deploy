import { Module } from '@nestjs/common';
import { VehiculoServicioController } from './vehiculo_servicio.controller';
import { VehiculoServicioService } from './vehiculo_servicio.service';

@Module({
  controllers: [VehiculoServicioController],
  providers: [VehiculoServicioService]
})
export class VehiculoServicioModule {}
