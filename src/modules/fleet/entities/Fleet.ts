import { randomUUID } from 'crypto';
import { FleetStatus } from '../enum/fleet-status.enum';
import { Replace } from 'src/utils/replace';

interface FleetSchema {
  fleetNumber: string;
  plate: string;
  first_trailer_plate: string;
  second_trailer_plate: string;
  third_trailer_plate: string;
  km: string;
  carrierId: string;
  status: FleetStatus;
  createdAt: Date; 
  updatedAt: Date;
}

export class Fleet {
  private props: FleetSchema;
  private _id: string;

  constructor(props: Replace<FleetSchema, { createdAt?: Date, updatedAt?: Date}>, id?: string) {
    this.props = {
      ...props,
      createdAt: props.createdAt || new Date(),
      updatedAt: new Date()
    };
    this._id = id || randomUUID();
  }

  get id(): string {
    return this._id;
  }

  get fleetNumber(): string {
    return this.props.fleetNumber;
  }

  set fleetNumber(fleetNumber: string) {
    this.props.fleetNumber = fleetNumber;
  }

  get plate(): string {
    return this.props.plate;
  }

  set plate(plate: string) {
    this.props.plate = plate;
  }

  get first_trailer_plate(): string {
    return this.props.first_trailer_plate;
  }

  set first_trailer_plate(first_trailer_plate: string) {
    this.props.first_trailer_plate = first_trailer_plate;
  }

  get second_trailer_plate(): string {
    return this.props.second_trailer_plate;
  }

  set second_trailer_plate(second_trailer_plate: string) {
    this.props.second_trailer_plate = second_trailer_plate;
  }

  get third_trailer_plate(): string {
    return this.props.first_trailer_plate;
  }

  set third_trailer_plate(first_trailer_plate: string) {
    this.props.first_trailer_plate = first_trailer_plate;
  }

  get km(): string {
    return this.props.km;
  }

  set km(km: string) {
    this.props.km = km;
  }

  get carrierId(): string {
    return this.props.carrierId;
  }

  set carrierId(carrierId: string) {
    this.props.carrierId = carrierId;
  }

  get status(): FleetStatus {
    return this.props.status;
  }

  set status(status: FleetStatus) {
    this.props.status = status;
  }

  get createdAt(): Date {
    return this.props.createdAt;
  }

  get updatedAt(): Date {
    return this.props.updatedAt;
  }

  set updatedAt(updatedAt : Date) {
    this.props.updatedAt = updatedAt
  }
}
