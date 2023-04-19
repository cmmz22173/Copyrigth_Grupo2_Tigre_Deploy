import { Module } from '@nestjs/common';
import { TipoServicioController } from './tipo_servicio.controller';
import { TipoServicioService } from './tipo_servicio.service';

@Module({
  controllers: [TipoServicioController],
  providers: [TipoServicioService]
})
export class TipoServicioModule {}
