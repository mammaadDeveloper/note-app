import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { NoteEntity } from './entities/note.entity';
import { Repository } from 'typeorm';
import { PaginationDto } from './dto/pagination.dto';
import { paginate } from './helpers/paginate.helper';
import { IPaginate } from './interfaces/paginate.interface';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(NoteEntity)
    private readonly repo: Repository<NoteEntity>,
  ) {}

  async all({page, limit}: PaginationDto): Promise<IPaginate<NoteEntity>> {
    const [notes, total] = await this.repo.findAndCount({
      skip: (page - 1) * limit,
      take: limit,
    });
    return paginate(notes, total, page, limit);
  }

  async create(note: Partial<NoteEntity>): Promise<NoteEntity> {
    const newNote = this.repo.create(note);
    return await this.repo.save(newNote);
  }

  async findOne(id: number): Promise<NoteEntity | null> {
    return await this.repo.findOne({ where: { id } });
  }

  async update(id: number, note: Partial<NoteEntity>): Promise<NoteEntity | null> {
    const existingNote = await this.repo.findOne({ where: { id } });
    if (!existingNote) {
      return null;
    }
    const updatedNote = this.repo.merge(existingNote, note);
    return await this.repo.save(updatedNote);
  }

  async delete(id: number): Promise<boolean> {
    const result = await this.repo.delete(id);
    return !!(result.affected && result.affected > 0);
  }
}
