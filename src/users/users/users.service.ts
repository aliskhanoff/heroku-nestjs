import { Injectable } from '@nestjs/common';

export type User = any;

@Injectable()
export class UsersService {

    private readonly users:User[];


    constructor() {
        this.users = [
            {
              userId: 1,
              email: 'john@gmail.com',
              password: 'changeme',
            },
            {
              userId: 2,
              email: 'chris@gmail.com',
              password: 'secret',
            },
            {
              userId: 3,
              email: 'maria@gmail.com',
              password: 'guess',
            },
          ];
    }

    findOne(login:string):Promise<User|undefined> {
        return this.users.find(x => x.email === login);
    }

}
