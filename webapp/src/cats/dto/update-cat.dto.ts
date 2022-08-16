import { PartialType } from '@nestjs/mapped-types';
import { CreateCatDto } from './create-cat.dto';
import { IsNotEmpty, MaxLength } from 'class-validator';

export class UpdateCatDto extends PartialType(CreateCatDto) {
    @IsNotEmpty({ message: '名前は必須項目です' })
    @MaxLength(255, { message: '名前は255文字以内で入力してください' })
    name: string;
}
