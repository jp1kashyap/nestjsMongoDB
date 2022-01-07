import {
  Controller,
  Dependencies,
  Post,
  Body,
  Bind,
  Get,
} from '@nestjs/common';
import { UserService } from '../../services/user/user.service';

@Controller('user')
@Dependencies(UserService)
export class UserController {
  constructor(UserService) {
    this.userService = UserService;
  }
  /**
   * get list of users
   *
   * @returns
   */
  @Get()
  usersList() {
    return this.userService.findAll();
  }

  @Post()
  @Bind(
    Body('name'),
    Body('email'),
    Body('phone_number'),
    Body('passcode'),
    Body('referral_code'),
  )
  async create(name, email, phone_number, passcode, referral_code) {
    const generatedId = await this.userService.create({
      name: name,
      email: email,
      phone_number: phone_number,
      referral_code: referral_code,
      passcode: passcode,
    });
    return { id: generatedId };
  }
}
