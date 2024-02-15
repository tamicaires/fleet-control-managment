import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { CreateUser } from "src/modules/user/useCases/createUser";
import { DatabaseModule } from "src/infra/database/database.module";

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [CreateUser]
  
})
export class UserModule {}