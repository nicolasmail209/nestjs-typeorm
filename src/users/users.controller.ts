import { Controller, Post, Get, Body } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) {}

    @Post()
    createUser(@Body() newUser: CreateUserDto): Promise<User> {
        return this.usersService.createUser(newUser)
    }

    @Get()
    getUsers(): Promise<User[]> {
        return this.usersService.getUsers();
    }

}
