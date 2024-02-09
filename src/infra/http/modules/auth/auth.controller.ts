import { 
  Controller, 
  Get, 
  HttpCode, 
  HttpStatus, 
  Post, 
  Request, 
  UseGuards 
} from "@nestjs/common";
import { AuthRequestModel } from "./models/authRequestModel";
import { SignInUseCase } from "src/modules/auth/useCases/signInUseCase/signInUseCase";
import { LocalAuthGuard } from "./guards/localAuth.guard";
import { Public } from "./decorators/is-public.decorator";
import { JwtAuthGuard } from "./guards/jwtAuth.guard";
import { CurrentUser } from "./decorators/current-user.decorator";
import { User } from "src/modules/user/entities/User";

@Controller()
export class AuthControler {
  
  constructor(private signInUseCase: SignInUseCase) {}

  @Post('login')
  @Public()
  @HttpCode(HttpStatus.OK)
  @UseGuards(LocalAuthGuard)
  async signIn(@Request() request: AuthRequestModel){
    
    const access_token = await this.signInUseCase.execute({ 
      user: request.user
    });

    return { access_token };
  }
  
  @Get('me')
  @UseGuards(JwtAuthGuard)
  async getMe(@CurrentUser() user: User){
    return user
  }
}