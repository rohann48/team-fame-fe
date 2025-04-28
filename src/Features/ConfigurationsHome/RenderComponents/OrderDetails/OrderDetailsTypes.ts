export type OrderDetailsTypes = {
  schemeDetails: {
    _id: string;
    clientId: string;
    clientInfo: {
      name: string;
      contactNo: number;
    };
    period: number;
    startDate: string;
    endDate: string;
    orderDetails: Array<{
      name: string;
      price: number;
      quantity: number;
      offers: {
        cashback: number;
      };
    }>;
    createdAt: string;
    updatedAt: string;
    paymentStatus: string;
    status: string;
    statusDescription: string;
    paymentMode: string;
    __v: number;
    id: string;
  }[];
  confirmDeleteEvent: (val: string, orderId: any) => void;
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
