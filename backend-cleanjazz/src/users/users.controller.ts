import { Controller, Post ,Body, Get, Param, ParseIntPipe, Delete, Patch} from '@nestjs/common';
import { createUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { user } from './user.entity';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UnauthorizedException } from '@nestjs/common';
@Controller('users')
export class UsersController {

    constructor(private userService: UsersService,
        private jwtService: JwtService) { }
    //metodo para insertar usuarios
    @Post()
    createUser(@Body() newUser: createUserDto) {
        return this.userService.createUser(newUser)
    }

    //metodo para obtener todos los usuarios
    @Get()
    getUsers(): Promise<user[]> {
        return this.userService.getUsers()
    }

    //metodo para obtener un usuario por id
    @Get(':id')
    getUser(@Param('id', ParseIntPipe) id: number) {
        return this.userService.getUser(id)
    }

    //metodo para borrar Usuario
    @Delete(':id')
    deleteUser(@Param('id', ParseIntPipe) id: number) {
        return this.userService.deleteUser(id)
    }

    //metodo para actualizar Usuario
    @Patch(':id')
    updateUser(@Param('id', ParseIntPipe) id: number, @Body() user: UpdateUserDto) {
        return this.userService.updateUser(id, user)

    }

    @Post('login')
    async login(@Body() credentials: { username: string, password: string }) {
      const { username, password } = credentials;
  
      // Obtener el usuario correspondiente al nombre de usuario
      const user = await this.userService.findOne(username);
  
      if (user) {
        // Verificar si la contraseña es válida
        const isValidPassword = await bcrypt.compare(password, user.password);
  
        if (isValidPassword) {
          // Generar el token JWT
          const payload = { username: user.username, sub: user.id };
          const accessToken = this.jwtService.sign(payload, { expiresIn: '30m' });
  
          // Devolver el token JWT generado
          return { accessToken };
        }
      }
  
      // Si las credenciales son inválidas, lanzar una excepción
      throw new UnauthorizedException('Credenciales inválidas');
    }
    
}
