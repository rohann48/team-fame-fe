export type configurationType = {
  sideNavLinks: Array<{
    title: string;
    img: any;
    path: string;
  }>;
  configurationRoutes: React.ReactElement<
    any,
    string | React.JSXElementConstructor<any>
  > | null;
  userInfo: {
    _id: string;
    name: string;
    role?: string;
    lastName: string;
    emailId: string;
    contactNo: string;
    password: "";
    confirmPassword: "";
    goldSchemeId: string;
    membership: boolean;
  };
};
