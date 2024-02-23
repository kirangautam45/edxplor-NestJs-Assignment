import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { VehicleStatus } from './vehicle-status.enum';

@Entity()
export class Vehicle {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  make: string;

  @Column()
  model: string;

  @Column()
  year: string;

  @Column()
  registration_number: string;

  @Column({
    type: 'enum',
    enum: VehicleStatus,
    default: VehicleStatus.ACTIVE,
  })
  current_status: VehicleStatus;

  @Column()
  location: string;
}
