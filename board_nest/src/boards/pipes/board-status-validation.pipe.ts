import { ArgumentMetadata, BadGatewayException, PipeTransform } from "@nestjs/common";
import { BoardStatus } from "../boards.modal";

export class BoardStatusValidationPipe implements PipeTransform{
    readonly StatusOptions =[
        BoardStatus.PRIVATE,
        BoardStatus.PUBLIC
    ]
    transform(value: any) {

        if(this.isStatusValid(value)){
            throw new  BadGatewayException(`${value} isnt in the status options`)
        }
        
        return value;
    }

    private isStatusValid(status: any){
        const index = this.StatusOptions.indexOf(status);
        return index !== -1;
    }
}