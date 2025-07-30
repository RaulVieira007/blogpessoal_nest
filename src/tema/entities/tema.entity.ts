import { IsNotEmpty } from "class-validator";
import { Postagem } from "src/postagem/entities/postagem.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "tb_temas"}) // Criando tabela "Temas"
export class Tema {

    @PrimaryGeneratedColumn()
    id: number // id = INT

    @IsNotEmpty()
    @Column({length: 255, nullable: false})
    descricao: string // descrição = Varchar
    
    @OneToMany(() => Postagem, (Postagem) => Postagem.tema)
    postagem: Postagem[]
}