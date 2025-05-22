import { Controller, Post, Body } from '@nestjs/common';
import { Public } from 'src/shared/decotarors/public.decorator';
import { AuthService } from '../services/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post('login')
  async login(@Body() body: { username: string; password: string }) {
    const result = await this.authService.validateUser(
      body.username,
      body.password,
    );
    return {
      access_token: result.access_token,
      user: result.user,
    };
  }
}
