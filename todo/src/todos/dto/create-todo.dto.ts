import { IsDate, IsDateString, IsNumber, IsString } from "class-validator";

export class CreateTodoDto{
    @IsString()
    readonly content: string;

    @IsString()
    readonly date: string;
}