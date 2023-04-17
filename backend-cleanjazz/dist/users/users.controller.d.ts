import { createUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { user } from './user.entity';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersController {
    private userService;
    constructor(userService: UsersService);
    createUser(newUser: createUserDto): Promise<user>;
    getUsers(): Promise<user[]>;
    getUser(idUsuario: number): Promise<user>;
    deleteUser(idUsuario: number): Promise<import("typeorm").DeleteResult>;
    updateUser(idUsuario: number, user: UpdateUserDto): Promise<import("typeorm").UpdateResult>;
}
