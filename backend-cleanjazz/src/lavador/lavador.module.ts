import { Module } from '@nestjs/common';
import { LavadorController } from './lavador.controller';
import { LavadorService } from './lavador.service';

@Module({
  controllers: [LavadorController],
  providers: [LavadorService]
})
export class LavadorModule {}
