import {User} from "firebase";
import {mappedUserDataType} from "../../interfaces";

export const mapUserData = (user: { uid: string, email: string, xa: string }):mappedUserDataType => {
  const {uid, email, xa} = user
  return {
    id: uid,
    email,
    token: xa,
  }
}
