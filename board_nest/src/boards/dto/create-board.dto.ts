import { IsNotEmpty } from "class-validator";

export class CreateBoardDto{
    @IsNotEmpty()  //필수
    title: string;
    
    @IsNotEmpty()
    description: string;
}