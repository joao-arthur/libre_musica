export class CreateUserDTO {
    name: string;
    username: string;
    password: string;
    email: string;
    gender: string;
    birthday: Date;
}

export class UserDB {
    constructor(
        public id: number,
        public name: string,
        public username: string,
        public email: string,
        public gender: string,
        public birthday: Date,
        public hash: string,
        public salt: string,
        public iterations: number
    ) {}
}
