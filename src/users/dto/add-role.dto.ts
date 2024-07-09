import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class AddRoleDto {
  @ApiProperty({ example: 'Название роли' })
  @IsString({ message: 'Должно быть строкой' })
  readonly value: string;
  @ApiProperty({ example: 'ID пользователя' })
  @IsNumber({}, { message: 'Должно быть числом' })
  readonly userId: number;
}
