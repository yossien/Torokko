import {User} from "firebase";
import {mappedUserDataType} from "../../interfaces";

export const mapUserData = (user):{} => {
  const {uid, email, xa} = user
  return {
    id: uid,
    email,
    token: xa,
  }
}
