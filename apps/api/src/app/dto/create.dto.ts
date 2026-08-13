import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class CreateNoteDto{
  @IsNotEmpty()
  @IsString()
  @MinLength(5)
  @MaxLength(50)
  @ApiProperty({type: String, example: 'drink water!', description: 'The title of the note. Must be a string between 5 and 50 characters.'})
  title!: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(5)
  @MaxLength(500)
  @ApiProperty({type: String, example: 'drink water every 2 hours!', description: 'The body of the note. Must be a string between 5 and 500 characters.'})
  body!: string;
}
