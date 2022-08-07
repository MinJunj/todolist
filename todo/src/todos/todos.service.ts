import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { todoList } from './entities/todo.entity';

@Injectable()
export class TodosService {
    private todoList: todoList[] = [];

    getAll() : todoList[] {
        return this.todoList;
    }

    getOne(uuid: number) : todoList {
        const todo = this.todoList.find(todo => todo.uuid === uuid);
        if(!todo){
            throw new NotFoundException(`todo with UUID : ${uuid} Not founded`);
        }
        return todo;
    }

    deleteOne(uuid : number) {
        this.getOne(uuid);
        this.todoList = this.todoList.filter(todo => todo.uuid !== uuid);
    }

    create(todoList_create : CreateTodoDto){
        this.todoList.push({
            uuid: this.todoList.length + 1,
            ...todoList_create
        });
    }

    update(uuid:number, todoUpdateList : UpdateTodoDto){
        const todo = this.getOne(uuid);
        this.deleteOne(uuid);   
        this.todoList.push({...todo, ...todoUpdateList});
    }
}