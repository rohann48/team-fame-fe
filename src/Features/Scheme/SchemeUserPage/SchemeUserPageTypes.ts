import { LoginContextInitialState } from "../../context/LoginContextTypes";

export type investmentSchema = {
  year: number;
  month: number;
  date: Date;
  amount: number;
  _id: string;
};
export type SchemeUserPageTypes = {
  schemeUserData: {
    investments: investmentSchema[];
    startDate: Date;
    endDate: Date;
    period: number;
  };
  userInfo: LoginContextInitialState["userInfo"];
};
