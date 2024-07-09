import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreatePostDto {
  @ApiProperty({ example: 'Заголовок', description: 'Заголовок поста' })
  @IsString({ message: 'Должно быть строкой' })
  readonly title: string;

  @ApiProperty({ example: 'Пост', description: 'Контент поста' })
  @IsString({ message: 'Должно быть строкой' })
  readonly content: string;

  @ApiProperty({ example: 'ID пользователя' })
  @IsNumber({}, { message: 'Должно быть числой' })
  readonly userId: number;
}
