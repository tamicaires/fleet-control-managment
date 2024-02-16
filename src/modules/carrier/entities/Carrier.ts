import { randomUUID } from "crypto";
import { CarrierStatus } from "../enum/carrier-status.enum";
import { Replace } from "src/utils/replace";

interface CarrierSchema {
  carrierName: string;
  managerName: string;
  managerPhone: string;
  status: CarrierStatus;
  createdAt: Date; 
  updatedAt: Date; 
}
export class Carrier {
  private props: CarrierSchema;
  private _id: string;
  
  constructor(props: Replace<CarrierSchema, {createdAt?: Date, updatedAt?: Date}>, id?: string) {
    this.props = {
      ...props, 
      createdAt: props.createdAt || new Date(),
      updatedAt: new Date()
    },
    this._id = id || randomUUID()
  }
    
  get id(): string {
    return this._id;
  }

  get carrierName(): string {
    return this.props.carrierName;
  }

  set carrierName(carrierName: string) {
    this.props.carrierName = carrierName;
  }

  get managerName(): string {
    return this.props.managerName;
  }

  set managerName(managerName: string) {
    this.props.managerName = managerName;
  }

  get managerPhone(): string {
    return this.props.managerPhone;
  }

  set managerPhone(managerPhone: string) {
    this.props.managerPhone = managerPhone;
  }

  get status(): CarrierStatus {
    return this.props.status;
  }

  set status(status: CarrierStatus) {
    this.props.status = status;
  }

  get createdAt(): Date {
    return this.props.createdAt;
  }

  get updatedAt(): Date {
    return this.props.updatedAt;
  }

  set updatedAt(updatedAt: Date) {
    this.props.updatedAt = updatedAt;
  }

}