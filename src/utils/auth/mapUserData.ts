import {mappedUserDataType} from "../../interfaces";

export const mapUserData = (user): mappedUserDataType => {
  const {uid, email, xa} = user
  return {
    id: uid,
    email,
    token: xa,
  }
}
