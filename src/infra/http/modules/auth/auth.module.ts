import { MiddlewareConsumer, Module } from "@nestjs/common";
import { AuthControler } from "./auth.controller";
import { LocalStrategy } from "src/modules/auth/strategies/local.strategy";
import { ValidateUserUseCase } from "src/modules/auth/useCases/validateUserUseCase/validateUserUseCase";
import { UserModule } from "../user/user.module";
import { DatabaseModule } from "src/infra/database/database.module";
import { signInDTOValidateMiddleware } from "./middleware/signInDTOValidate.middleware";
import { SignInUseCase } from "src/modules/auth/useCases/signInUseCase/signInUseCase";
import { JwtModule } from "@nestjs/jwt";
import { JwtStrategy } from "src/modules/auth/strategies/jwtStrategy";

@Module({
  imports: [
    DatabaseModule, 
    UserModule, 
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: process.env.JWT_EXPIRE },
  })],
  controllers: [AuthControler],
  providers: [LocalStrategy, JwtStrategy, ValidateUserUseCase,SignInUseCase],
})

export class AuthModule {
  configure(consumer: MiddlewareConsumer){
    consumer.apply(signInDTOValidateMiddleware).forRoutes('login')
  }
}



