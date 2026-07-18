import { PartialType } from '@nestjs/mapped-types';
import { CreateNoteDto } from './create.dto';

export class UpdateNoteDto extends PartialType(CreateNoteDto) {}
