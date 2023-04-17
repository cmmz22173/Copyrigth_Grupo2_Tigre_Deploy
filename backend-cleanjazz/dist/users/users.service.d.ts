import { user } from './user.entity';
import { Repository } from 'typeorm';
import { createUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersService {
    private userRepository;
    constructor(userRepository: Repository<user>);
    createUser(user: createUserDto): Promise<user>;
    getUsers(): Promise<user[]>;
    getUser(idUsuario: number): Promise<user>;
    deleteUser(idUsuario: number): Promise<import("typeorm").DeleteResult>;
    updateUser(idUsuario: number, user: UpdateUserDto): Promise<import("typeorm").UpdateResult>;
}
