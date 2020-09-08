interface CommonUserFields {
    email: string;
    password: string;
}

export interface ICreateUser extends CommonUserFields {}
export interface IUserFields extends CommonUserFields {}

export interface IUser extends CommonUserFields {
    id: number;
}

