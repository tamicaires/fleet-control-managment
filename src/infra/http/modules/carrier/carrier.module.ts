import { Module } from "@nestjs/common";
import { CarrierController } from "./carrier.controller";
import { CreateCarrier } from "src/modules/carrier/useCases/createCarrierUseCase/createCarrier";
import { EditCarrier } from "src/modules/carrier/useCases/editCarrierUseCase/editCarrier";
import { DeleteCarrier } from "src/modules/carrier/useCases/deleteCarrierUseCase/deleteCarrier";
import { GetCarrier } from "src/modules/carrier/useCases/getCarrierUseCase/getCarrier";
import { GetManyCarriers } from "src/modules/carrier/useCases/getAllCarrriersUseCase/getManyCarriers";
import { DatabaseModule } from "src/infra/database/database.module";

@Module({
  controllers: [CarrierController],
  imports: [DatabaseModule],
  providers: [ 
    CreateCarrier,
    EditCarrier,
    DeleteCarrier,
    GetCarrier,
    GetManyCarriers
  ]
})

export class CarrierModule{}