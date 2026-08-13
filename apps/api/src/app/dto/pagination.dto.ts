import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsInt, IsOptional, Max, Min } from "class-validator";

export class PaginationDto {
  @IsOptional()
  @Type(() => Number)
  // @IsInt()
  // @Min(1)
  @ApiProperty({type: Number, default: 1, description: 'The page number to retrieve. Must be a positive integer.'})
  page = 1

  @IsOptional()
  @Type(() => Number)
  // @IsInt()
  // @Min(1)
  // @Max(100)
  @ApiProperty({type: Number, default: 1, description: 'The limit of data. Must be a positive integer between 1 and 100.'})
  limit = 10;
}
