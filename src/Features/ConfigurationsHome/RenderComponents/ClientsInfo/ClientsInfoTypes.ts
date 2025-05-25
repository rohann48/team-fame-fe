// Client Data Interface
export interface Client {
  _id: string;
  id: string;
  name: string;
  lastName: string;
  contactNo: number;
  emailId: string;
  role: "admin" | "member";
  membership: boolean;
  goldSchemeId?: string;
}

// Props Interface for ClientsInfo Component
export interface ClientsInfoTypes {
  clientDetails: Client[];
  currentUserId?: string;
  loading?: boolean;
}
