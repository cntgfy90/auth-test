import { ICreateUser, IUser, IUserFields } from '../../entities/user/types'

export interface IUserRepository {
    create(data: ICreateUser): IUser;
    save(user: IUser): Promise<IUser>;
    findOne(fields: Partial<IUserFields>): Promise<IUser | undefined>;
}
