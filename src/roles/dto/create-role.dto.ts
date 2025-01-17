import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateRoleDto {
  @ApiProperty({ example: 'Название роли' })
  @IsString({ message: 'Должно быть строкой' })
  readonly value: string;

  @ApiProperty({ example: 'Описание роли' })
  @IsString({ message: 'Должно быть строкой' })
  readonly description: string;
}
