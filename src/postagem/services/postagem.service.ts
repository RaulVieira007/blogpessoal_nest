import { HttpException, HttpStatus, Injectable } from '@nestjs/common'; // pacote Common com os respectivos decoradores
import { DeleteResult, ILike, Repository } from 'typeorm'; // Repository do módulo typeorm
import { Postagem } from '../entities/postagem.entity'; // Importamos a classe entidade Postagem, do módulo Postagem.
import { InjectRepository } from '@nestjs/typeorm'; // pacote TypeORM com os respectivos decoradores
import { promises } from 'dns';

@Injectable() //  decorador @Injectable indica que a classe é um serviço, ou seja, uma classe que pode ser injetada em outras classes por meio da Injeção de Dependências.
export class PostagemService{
  constructor(
    @InjectRepository(Postagem) // tabela no banco de dados <---
    private postagemRepository: Repository<Postagem>
) { }

  async findAll (): Promise<Postagem[]> {
    return await this.postagemRepository.find(); // Equivalente a: SELECT * FROM tb_postagens;
  }

  async findById(id: number): Promise<Postagem> {

    const postagem = await this.postagemRepository.findOne({
        where: {
            id
        }
    });

    if (!postagem)
        throw new HttpException('Postagem não encontrada!', HttpStatus.NOT_FOUND);
    return postagem;
  }

  async findAllByTitulo(titulo: string): Promise<Postagem[]>{
    return await this.postagemRepository.find({
        where:{
            titulo: ILike(`%${titulo}%`)
        }
    })
  }
  
  async create(postagem: Postagem): Promise<Postagem> {
    return await this.postagemRepository.save(postagem);
  }

  async update(postagem: Postagem): Promise<Postagem>{

    await this.findById(postagem.id);

    return await this.postagemRepository.save(postagem);
  }

  async delete(id: number): Promise<DeleteResult>{

    await this.findById(id);

    return await this.postagemRepository.delete(id);
  }
}
