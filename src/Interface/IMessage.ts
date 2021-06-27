import IUser from "./IUser";
export default interface message {
  id: number;
  content: string;
  sender: IUser;
}
