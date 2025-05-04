import { User } from "../../HeaderNav/HeaderNavTypes";

export const isMemberOrNot = (userInfo: any) => {
  if (userInfo?._id && userInfo?.membership) {
    return true;
  } else {
    return false;
  }
};
