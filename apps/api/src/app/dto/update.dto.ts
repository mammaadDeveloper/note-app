import { PartialType } from '@nestjs/mapped-types';
import { CreateNoteDto } from './create.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('notes')
export class UpdateNoteDto extends PartialType(CreateNoteDto) {}
