import { Module } from '@nestjs/common';
import { ServicioController } from './servicio.controller';
import { ServicioService } from './servicio.service';

@Module({
  controllers: [ServicioController],
  providers: [ServicioService]
})
export class ServicioModule {}
