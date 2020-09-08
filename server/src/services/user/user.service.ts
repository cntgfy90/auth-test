import { User } from '../../entities/user/user'
import { ICreateUser, IUser, IUserFields } from '../../entities/user/types'
import { Repository, getConnection } from 'typeorm';

export class UserService {
    private repository: Repository<User>;
    
    constructor(repo = getConnection().getRepository(User)) {
        this.repository = repo;
    }

    create(data: ICreateUser): IUser {
        return this.repository.create(data);
    }

    save(user: IUser): Promise<IUser> {
        return this.repository.save(user);
    }

    findOne(fields: Partial<IUserFields>): Promise<IUser | undefined> {
        return this.repository.findOne(fields);
    }
}
