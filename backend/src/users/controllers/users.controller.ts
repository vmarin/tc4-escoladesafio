import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { ZodValidationPipe } from 'src/shared/pipe/zod-validation.pipe';
import { LoggingInterceptor } from 'src/shared/interceptors/logging.interceptor';
import { UsersService } from '../services/users.service';
import {
  CreateUser,
  createUserSchema,
  UpdateUser,
  updateUserSchema,
} from '../validations/users.zod';
import { AdminGuard } from 'src/shared/guards/admin.guard';

@UseInterceptors(LoggingInterceptor)
@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}
  @Get()
  async getAllUsers(
    @Query('isAdmin') isAdmin?: string,
    @Query('role') role?: string,
  ) {
    const filters: Record<string, any> = {};

    if (isAdmin !== undefined) {
      filters.isAdmin = isAdmin === 'true';
    }

    if (role) {
      filters.role = role;
    }

    return this.userService.getAllUsers(filters);
  }
  @Get(':userId')
  async getUser(@Param('userId') userId: string) {
    return this.userService.getUser(userId);
  }
  @UseGuards(AdminGuard)
  @Post()
  async createUser(
    @Body(new ZodValidationPipe(createUserSchema)) user: CreateUser,
  ) {
    return this.userService.createUser(user);
  }
  @UseGuards(AdminGuard)
  @Put(':userId')
  async updateUser(
    @Param('userId') userId: string,
    @Body(new ZodValidationPipe(updateUserSchema))
    { fullName, isAdmin, role }: UpdateUser,
  ) {
    return this.userService.updateUser(userId, { fullName, isAdmin, role });
  }
  @UseGuards(AdminGuard)
  @Delete(':userId')
  async deleteUser(@Param('userId') userId: string) {
    return this.userService.deleteUser(userId);
  }
}
