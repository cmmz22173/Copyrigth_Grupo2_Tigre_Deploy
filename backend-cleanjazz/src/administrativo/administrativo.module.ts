import { Module } from '@nestjs/common';
import { AdministrativoController } from './administrativo.controller';
import { AdministrativoService } from './administrativo.service';

@Module({
  controllers: [AdministrativoController],
  providers: [AdministrativoService]
})
export class AdministrativoModule {}
