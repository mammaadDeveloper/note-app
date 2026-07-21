import { Body, Controller, Get, HttpCode, HttpStatus, Patch, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { PaginationDto } from './dto/pagination.dto';
import { NoteEntity } from './entities/note.entity';
import { CreateNoteDto } from './dto/create.dto';
import { UpdateNoteDto } from './dto/update.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  async all(@Query() query: PaginationDto): Promise<unknown> {
    return await this.appService.all(query);
  }

  @Get(':id')
  async findOne(@Query('id') id: number): Promise<NoteEntity | null> {
    return await this.appService.findOne(id);
  }

  @Post()
  async create(@Body() note: CreateNoteDto): Promise<NoteEntity> {
    return await this.appService.create(note);
  }

  @Patch(':id')
  async update(@Query('id') id: number, @Body() note: UpdateNoteDto): Promise<NoteEntity | null> {
    return await this.appService.update(id, note);
  }

  @Get(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Query('id') id: number): Promise<boolean> {
    return await this.appService.delete(id);
  }
}
