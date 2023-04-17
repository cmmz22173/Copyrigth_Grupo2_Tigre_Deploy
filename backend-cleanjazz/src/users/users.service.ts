import { Inject, Injectable } from '@nestjs/common';
import { user } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { createUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
@Injectable()
export class UsersService {

    constructor(@InjectRepository(user) private userRepository: Repository<user>) { }

    //metodo para insertar usuarios
    createUser(user: createUserDto){
        const newUser = this.userRepository.create(user)
        return this.userRepository.save(newUser)
    }


    //metodo para obtener todos los usuarios
    getUsers(){
        return this.userRepository.find()
    }

    //metodo para obtener un usuario por id
    getUser(idUsuario: number){
        return this.userRepository.findOne({
            where: {
                idUsuario
            }
        })
    }

    //metodo para borrar Usuario
    deleteUser(idUsuario: number){
        return this.userRepository.delete(idUsuario)
    }

    //metodo para actualizar Usuario
    updateUser(idUsuario: number, user: UpdateUserDto){
        return this.userRepository.update(idUsuario, user)

    }  
        
}
