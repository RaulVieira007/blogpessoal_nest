import { IsNotEmpty } from "class-validator";
import {
  Column,
  Entity,
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
}
