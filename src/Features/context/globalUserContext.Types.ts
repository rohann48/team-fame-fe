export type TUserInfo = {
  _id: string;
  name: string;
  uid: string;
  moduleInfo: {
    [key: string]: {
      assignedPermission: {
        [key: string]: boolean;
      };
      isAccessible: boolean;
      selectedMonth?: number;
      selectedYear?: number;
    };
  };
  email: "test_admin2@updaptcsr.com";
  designation: "EhsManager";
  phoneNumber: [];
  assignedCompany: "6261534149fc603ad9a6bfd2";
  isEmailVerified: true;
  isDisabled: false;
  isReadOnlyUser: false;
  isDemoUser: false;
  licenceType: "administrator";
  taskRole: "admin";
  isSuperAdmin: true;
} | null;
export type TUserCompanyId = string | null;
export type TScmName = string | null;
export type GlobalUserContextType = {
  userInfo: TUserInfo;
  userCompanyId: TUserCompanyId;
  scmName: TScmName;
  //   onNavigate: any;
};
