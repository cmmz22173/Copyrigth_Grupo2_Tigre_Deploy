import { Controller, Post ,Body, Get, Param, ParseIntPipe, Delete, Patch} from '@nestjs/common';
import { createUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { user } from './user.entity';
import { UpdateUserDto } from './dto/update-user.dto';
@Controller('users')
export class UsersController {

    constructor(private userService: UsersService) { }
    //metodo para insertar usuarios
    @Post()
    createUser(@Body() newUser: createUserDto) : Promise<user> {
        return this.userService.createUser(newUser)
    }

    //metodo para obtener todos los usuarios
    @Get()
    getUsers(): Promise<user[]> {
        return this.userService.getUsers()
    }

    //metodo para obtener un usuario por id
    @Get(':idUsuario')
    getUser(@Param('idUsuario', ParseIntPipe) idUsuario: number): Promise<user> {
        console.log(idUsuario)
        console.log(typeof idUsuario)
        return this.userService.getUser(idUsuario)
    }

    //metodo para borrar Usuario
    @Delete(':idUsuario')
    deleteUser(@Param('idUsuario', ParseIntPipe) idUsuario: number) {
        return this.userService.deleteUser(idUsuario)
    }

    //metodo para actualizar Usuario
    @Patch(':idUsuario')
    updateUser(@Param('idUsuario', ParseIntPipe) idUsuario: number, @Body() user: UpdateUserDto) {
        return this.userService.updateUser(idUsuario, user)

    }
    
}
