import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClienteModule } from './cliente/cliente.module';
import { GrupoModule } from './grupo/grupo.module';
import { MarcaModule } from './marca/marca.module';
import { ModeloModule } from './modelo/modelo.module';
import { VehiculoModule } from './vehiculo/vehiculo.module';
import { EmpleadoModule } from './empleado/empleado.module';
import { PuestoModule } from './puesto/puesto.module';
import { GuardiaModule } from './guardia/guardia.module';
import { AdministrativoModule } from './administrativo/administrativo.module';
import { LavadorModule } from './lavador/lavador.module';
import { TipoServicioModule } from './tipo_servicio/tipo_servicio.module';
import { ServicioModule } from './servicio/servicio.module';
import { VehiculoServicioModule } from './vehiculo_servicio/vehiculo_servicio.module';
import { TipoProductoModule } from './tipo_producto/tipo_producto.module';
import { ProductoModule } from './producto/producto.module';
import { InventarioModule } from './inventario/inventario.module';
import { LavadorProductoModule } from './lavador_producto/lavador_producto.module';
import { TurnoGuardiaModule } from './turno-guardia/turno-guardia.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'carwash-database-1.c4wwmskpgbep.us-east-1.rds.amazonaws.com',
      username: 'tigre',
      password: 'trestristestigrestragabantrigoen1trigal',
      database: 'backoffice',
      port: 3306,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      migrations: ['dist/migrations/*{.ts,.js}'],
      migrationsRun: true,
    }),
    UsersModule,
    ClienteModule,
    GrupoModule,
    MarcaModule,
    ModeloModule,
    VehiculoModule,
    EmpleadoModule,
    PuestoModule,
    GuardiaModule,
    AdministrativoModule,
    LavadorModule,
    TipoServicioModule,
    ServicioModule,
    VehiculoServicioModule,
    TipoProductoModule,
    ProductoModule,
    InventarioModule,
    LavadorProductoModule,
    TurnoGuardiaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
