import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";
import { Postagem } from "src/postagem/entities/postagem.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "tb_temas"}) // Criando tabela "Temas"
export class Tema {

    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number // id = INT

    @ApiProperty()
    @IsNotEmpty()
    @Column({length: 255, nullable: false})
    descricao: string // descrição = Varchar
    
    @ApiProperty()
    @OneToMany(() => Postagem, (Postagem) => Postagem.tema)
    postagem: Postagem[]
}