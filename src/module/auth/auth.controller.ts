import { Controller, Get, Post, Body, Param } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { User } from "./entity/user.entity";
import { ApiTags } from "@nestjs/swagger";

@ApiTags('auth')
@Controller('auth')
export class AuthController{

  constructor(
    private readonly authService: AuthService
  ){}

  @Get('users/:openId')
  async getUser(@Param('openId') openId: string) {
    return await this.authService.findUserByOpenId(openId)
  }

  @Post('users')
  async createUser(@Body() user: User) {
    console.log("get user", user, user instanceof User)
    await this.authService.saveUser(user)
  }

}