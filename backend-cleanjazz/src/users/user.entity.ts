import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm'
@Entity({name: 'usuario'}) // Este es el nombre de la tabla en la base de datos
export class user{

    @PrimaryGeneratedColumn()
    idUsuario:number
    @Column()
    username:string
    @Column()
    password:string
    @Column()
    idCliente:number
    @Column({default: 'activo'})
    estado:string
}


