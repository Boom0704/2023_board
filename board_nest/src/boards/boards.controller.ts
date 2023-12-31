import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Board, BoardStatus } from './boards.modal';
import { CreateBoardDto } from './dto/create-board.dto';


@Controller('boards')
export class BoardsController {
    constructor(private boardService: BoardsService) { }

    @Get('/')
    getAllBoards(): Board[] {
        return this.boardService.getAllBoards();
    }

    @Post('/')
    createBoard(
        @Body() CreateBoardDto: CreateBoardDto
    ): Board {
        return this.boardService.createBoard(CreateBoardDto);
    }

    @Get('/:id')
    getBoardById(@Param('id') id: string): Board {
        return this.boardService.getBoardById(id);
    }

    @Delete('/:id')
    deleteBoard(@Param('id') id: string): Board {
        return this.boardService.deleteBoard(id);
    }

    @Patch('/:id/status')
    updateBoardStatus(
        @Param('id') id: string,
        @Body('status') status: BoardStatus
    ): Board {
        return this.boardService.updateBoardStatus(id, status);
    }
}
