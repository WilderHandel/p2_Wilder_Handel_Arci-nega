import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreatePaisDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'La descripción no debe ser vacío' })
  @IsString({ message: 'La descripción  debe ser de tipo cadena' })
  @MaxLength(30, {
    message: 'La descripción  no debe ser mayor a 30 caracteres',
  })
  readonly descripcion: string;
}
