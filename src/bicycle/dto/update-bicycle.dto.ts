import { PartialType } from '@nestjs/mapped-types';
import { CreateBicycleDto } from './create-bicycle.dto';

export class UpdateBicycleDto extends PartialType(CreateBicycleDto) {
  name: string;
  station: string;
  description: string;
}
