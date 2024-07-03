import { LoginContextInitialState } from "../../context/LoginContextTypes";

export type SchemeJoinPageTypes = {
  handleSignUpModalToggle: () => void;
  userInfo: LoginContextInitialState["userInfo"];
  handleJoinScheme: (id: string) => void;
  handleSelectPeriod: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};
