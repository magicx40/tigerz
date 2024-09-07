import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { jwtConstants } from './constants';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // 从请求中解析jwt的方法
            ignoreExpiration: false, // 交给Passport处理是否过期
            secretOrKey: jwtConstants.secret, // 验证的密钥
        });
    }

    async validate(payload: any) {
        return { userId: payload.sub, username: payload.username };
    }
}
