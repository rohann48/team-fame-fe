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
    __v: number;
    id: string;
  }[];
};
