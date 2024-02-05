import { randomUUID } from 'crypto';
import { FleetStatus } from '../enum/fleet-status.enum';

interface FleetSchema {
  fleetNumber: string;
  plate: string;
  first_trailer_plate: string;
  second_trailer_plate: string;
  third_trailer_plate: string;
  km: string;
  status: FleetStatus;
}

export class Fleet {
  props: FleetSchema;
  _id: string;

  constructor(props: FleetSchema, id?: string) {
    this.props = props;
    this._id = id || randomUUID();
  }

  get id(): string {
    return this._id;
  }

  get fleet(): string {
    return this.props.fleetNumber;
  }

  set fleet(fleetNumber: string) {
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

  get status(): string {
    return this.props.status;
  }

  set status(status: FleetStatus) {
    this.props.status = status;
  }
}
