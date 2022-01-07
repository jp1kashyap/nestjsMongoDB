import { Injectable, Dependencies } from '@nestjs/common';

@Injectable()
@Dependencies('USER_MODEL')
export class UserService {
  constructor(userModel) {
    this.userModel = userModel;
  }
  /**
   * create new user
   * @param {*} user
   * @returns
   */
  async create(user) {
    const createdUser = new this.userModel(user);
    return createdUser.save();
  }
  /**
   * get list of all users
   * @returns
   */
  async findAll() {
    return this.userModel.find().exec();
  }
}
