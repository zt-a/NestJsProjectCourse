import { ApiProperty } from '@nestjs/swagger';
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { User } from 'src/users/users.model';

interface PostCreationAttrs {
  title: string;
  content: string;
  userId: number;
  image: string;
}

@Table({
  tableName: 'posts',
})
export class Post extends Model<Post, PostCreationAttrs> {
  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'Заголовок', description: 'Заголовок поста' })
  @Column({ type: DataType.STRING, unique: true })
  title: string;

  @ApiProperty({ example: 'Контент', description: 'Контент поста' })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  content: string;

  @ApiProperty({
    example: 'Изображение',
    description: 'Изображение поста должен быть в формате jpg',
  })
  @Column({ type: DataType.STRING })
  image: string;

  @ApiProperty({ example: 'ID Пользователя', description: 'ID Пользователя' })
  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER })
  userId: number;

  @ApiProperty({ example: 'Автор', description: 'Автор' })
  @BelongsTo(() => User)
  author: User;
}
