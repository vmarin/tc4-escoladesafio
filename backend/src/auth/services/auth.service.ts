import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { AuthUsersService } from 'src/users/services/auth-users.service';

interface TokenPayload {
  sub: string;
  username: string;
  isAdmin: boolean;
}

interface AuthResponse {
  access_token: string;
  user: {
    id: string;
    username: string;
    fullName: string;
    role: string;
    created_at: Date;
    modified_at: Date;
  };
}

@Injectable()
export class AuthService {
  constructor(
    private readonly authUsersService: AuthUsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(
    username: string,
    password: string,
  ): Promise<AuthResponse> {
    const user = await this.authUsersService.findByUsername(username);
    if (!user) {
      throw new UnauthorizedException('Credenciais inválidas');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Credenciais inválidas');
    }

    const payload: TokenPayload = {
      sub: user._id,
      username: user.username,
      isAdmin: user.isAdmin,
    };
    return {
      access_token: this.jwtService.sign(payload),
      user: {
        id: user._id,
        username: user.username,
        fullName: user.fullName,
        role: user.role,
        created_at: user.created_at,
        modified_at: user.modified_at,
      },
    };
  }
}
