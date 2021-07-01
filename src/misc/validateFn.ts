import axios from "axios";
import { VALIDATE_URL, ACCOUNT_URL } from "./BaseUrls";

interface IPayload {
  id: number;
  username: string;
  email: string;
}

export default async (token: string): Promise<[string, IPayload] | void> => {
  if (!token) return;
  try {
    const { data } = await axios.get(VALIDATE_URL, {
      headers: {
        jwt_token: token,
      },
    });
    localStorage.setItem("JWT-TOKEN", data.token);
    const res = await axios.get(ACCOUNT_URL, {
      headers: {
        jwt_token: token,
      },
    });
    let jwtPayload = res.data["jwt-payload"];
    const payloadData: IPayload = {
      id: 1,
      username: jwtPayload.username,
      email: jwtPayload.email,
    };
    localStorage.setItem("userData", JSON.stringify(payloadData));
    return [data.token, payloadData];
  } catch (err) {
    console.dir(err);
  }
};
