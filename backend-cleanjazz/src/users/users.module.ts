import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { user } from './user.entity';
import { JwtModule } from '@nestjs/jwt';
@Module({
  imports: [TypeOrmModule.forFeature([user]),
  JwtModule.register({
    secret: 'mysecretkey',
    signOptions: { expiresIn: '30m' },
  }),

],
  
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
