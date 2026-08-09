import { Body, Controller, Get, HttpCode, HttpStatus, Patch, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { PaginationDto } from './dto/pagination.dto';
import { NoteEntity } from './entities/note.entity';
import { CreateNoteDto } from './dto/create.dto';
import { UpdateNoteDto } from './dto/update.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller()
@ApiTags('notes')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiResponse({status: 200, description: 'Successfully retrieved notes.'})
  async all(@Query() query: PaginationDto): Promise<unknown> {
    return await this.appService.all(query);
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @ApiResponse({status: 200, description: 'Successfully retrived note by id.'})
  async findOne(@Query('id') id: number): Promise<NoteEntity | null> {
    return await this.appService.findOne(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiResponse({status: 201, description: 'Successfully created note.'})
  async create(@Body() note: CreateNoteDto): Promise<NoteEntity> {
    return await this.appService.create(note);
  }

  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  @ApiResponse({status: 200, description: 'Successfully updated note.'})
  async update(@Query('id') id: number, @Body() note: UpdateNoteDto): Promise<NoteEntity | null> {
    return await this.appService.update(id, note);
  }

  @Get(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiResponse({status: 204, description: 'Successfully deleted note.'})
  async delete(@Query('id') id: number): Promise<boolean> {
    return await this.appService.delete(id);
  }
}
