export interface IUserCreate {
  name: string;
  login: string;
  email: string;
  password: string;
}

export interface IUser {
  id: string;
  name: string;
  login: string;
}
