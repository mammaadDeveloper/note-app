import { IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class CreateNoteDto{
  @IsNotEmpty()
  @IsString()
  @MinLength(5)
  @MaxLength(50)
  title!: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(5)
  @MaxLength(500)
  body!: string;
}
