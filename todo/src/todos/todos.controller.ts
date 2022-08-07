import { Body, ConsoleLogger, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { todoList } from './entities/todo.entity';
import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {
    constructor(private readonly todoService: TodosService){}

    @Get()
    getAll(): todoList[] {
        return this.todoService.getAll();
    }

    @Get(":uuid")
    getOne(@Param('uuid') uuid:number) :todoList {
        return this.todoService.getOne(uuid);  
    }

    @Post()
    create(@Body() todoList_create : CreateTodoDto){
        return this.todoService.create(todoList_create);
    }

    @Delete(':uuid')
    remove(@Param('uuid') uuid:number){
        return this.todoService.deleteOne(uuid);
    }

    @Patch(':uuid')
    path(@Param('uuid') uuid:number, @Body() todoUpdateList : UpdateTodoDto){
        return this.todoService.update(uuid, todoUpdateList);
    }
}
