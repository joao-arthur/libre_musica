import { Injectable } from '@nestjs/common';
import { CreateUserDTO, UserDB } from './user.dto';
import Authorization from '../Core/Authorization';
@Injectable()
export class UserService {
    create(user: CreateUserDTO) {
        const { name, username, password, email, gender, birthday } = user;

        new UserDB(
            0,
            name,
            username,
            email,
            gender,
            birthday,
            '',
            '',
            Authorization.getIterations()
        );
    }
}
