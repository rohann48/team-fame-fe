export type AdminGoldSchemeTypes = {
  schemeDetails: {
    _id: string;
    clientId: {
      name: string;
      contactNo: number;
    };
    period: number;
    startDate: string;
    endDate: string;
    investments: [];
    createdAt: string;
    updatedAt: string;
    __v: number;
    id: string;
  }[];
  toggleModal: () => void;
};
