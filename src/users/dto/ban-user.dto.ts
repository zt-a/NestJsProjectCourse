import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class BanUserDto {
  @ApiProperty({ example: 'ID пользователя' })
  @IsNumber({}, { message: 'Должно быть числой' })
  readonly userId: number;

  @ApiProperty({
    example: 'Причина бана',
    description: 'Подробная причина поста',
  })
  @IsString({ message: 'Должно быть строкой' })
  readonly banReason: string;
}
