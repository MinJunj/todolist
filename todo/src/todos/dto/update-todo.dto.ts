import { PartialType } from "@nestjs/mapped-types";
import { IsDate, IsDateString, IsNumber, IsString } from "class-validator";
import { CreateTodoDto } from "./create-todo.dto";

export class UpdateTodoDto extends PartialType(CreateTodoDto) {}