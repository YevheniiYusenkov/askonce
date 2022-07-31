import { Type } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';

export class AskDto {
  @Type(() => String)
  @IsNotEmpty()
  text = 'Hey!';
}
