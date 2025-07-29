import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common"; // Importando o pacote Common com os respectivos decoradores, que serão utilizados na implementação da Classe PostagemController.
import { PostagemService } from "../services/postagem.service"; // Importando a Classe PostagemService, que é responsável pela lógica de negócio relacionada à Postagem.
import { Postagem } from "../entities/postagem.entity";  // Importando a Classe Postagem, do módulo Postagem.
import { get } from "http";

@Controller('/postagens') // @Controller indica que a classe é um RestController, Responsável por resqusição HTTP  (Exemplos: 200 para sucesso, 201 para criação, 404 para não encontrado).
export class PostagemController{
    constructor(private readonly postagemService: PostagemService){} // PostagemService dentro da controladora, permitindo que a lógica de negócios (como a recuperação, criação, atualização e exclusão de postagens) seja delegada ao serviço, mantendo a controladora focada apenas em gerenciar as requisições HTTP.

    @Get() // Rota
    @HttpCode(HttpStatus.OK) //  decorador @HttpCode(HttpStatus.OK) é utilizado para definir o código de status HTTP que será retornado quando a requisição for processada com sucesso
    findAll(): Promise<Postagem[]>{ // O método findAll() é um método assíncrono que retorna uma Promise
        return this.postagemService.findAll(); // O método findAll() da PostagemService é chamado para realizar a busca de todas as postagens no banco de dados,
    }
        
    @Get('/:id') // Rota
    @HttpCode(HttpStatus.OK)
    findByInd(@Param('id', ParseIntPipe) id: number): Promise<Postagem> {
        return  this.postagemService.findById(id);
    }

    @Get('/titulo/:titulo') // Rota
    @HttpCode(HttpStatus.OK)
    findByAllTitulo(@Param('titulo') titulo: string) : Promise<Postagem[]>{
        return this.postagemService.findAllByTitulo(titulo);
    }
    
    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() Postagem: Postagem): Promise<Postagem> {
        return this.postagemService.create(Postagem);
    }

    @Put()
    @HttpCode(HttpStatus.OK)
    update(@Body() postagem: Postagem): Promise<Postagem> {
        return this.postagemService.update(postagem);
    }

    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id', ParseIntPipe) id: number){
        return this.postagemService.delete(id);
    }
}   