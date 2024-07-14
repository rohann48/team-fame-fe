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
  postInvestment: () => void;
  handleInvestments: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSelectMonth: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  selectedMonth: string | undefined;
};
