export interface IUser {
  id: number;
  name: string;
  email: string;
  password: string;
  remember_token: string;
}
const data: IUser[] = [
  {
    id: 1,
    name: 'Juan',
    email: 'juan@gmail.com',
    password: 'abc123.',
    remember_token: '1221'
  }
];
export default data;
