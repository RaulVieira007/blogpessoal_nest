import { IsNotEmpty } from "class-validator";
import { Tema } from "src/tema/entities/tema.entity";
import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: "tb_postagens" }) // Crianção da tabela
export class Postagem {
  @PrimaryGeneratedColumn() // Chave primaria com prenchimento automatico.
  id: number; // Coluna ID 

  @IsNotEmpty()
  @Column({ length: 100, nullable: false })
  titulo: string; // Coluna Titulo 

  @IsNotEmpty()
  @Column({ length: 1000, nullable: false })
  texto: string; // Coluna texo

  @UpdateDateColumn()
  data: Date; // Coluna data

  @ManyToOne(() => Tema, (tema) => tema.postagem, {
    onDelete: "CASCADE"
  })
  tema : Tema;
    static tema: any;
}
