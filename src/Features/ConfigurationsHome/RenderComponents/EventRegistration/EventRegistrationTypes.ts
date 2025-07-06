export interface Client {
  _id: string;
  name: string;
  lastName: string;
  contactNo: number;
  emailId: string;
  id: string;
}

export interface ImageInfo {
  name: string;
  Key: string;
  path: string;
  date: string;
  _id: string;
}

export interface Event {
  _id: string;
  name: string;
  title: string;
  description: string;
  location: string;
  status: string;
  date: string;
  time: string;
  imageInfo: ImageInfo[];
  clientIds: Client[];
  createdAt: string;
  updatedAt: string;
  __v: number;
  id: string;
}

export interface ApiResponse {
  status: string;
  message: string;
  results: Event[];
}

// Flattened registration data for table display
export interface RegistrationRecord {
  clientId: string;
  clientName: string;
  clientLastName: string;
  clientEmail: string;
  clientPhone: number;
  eventId: string;
  eventName: string;
  eventTitle: string;
  eventLocation: string;
  eventDate: string;
  eventTime: string;
  eventStatus: string;
  registrationDate: string;
}

// Fixed props interface - should match what the container passes
export interface EventRegistrationComponentsProps {
  registrations: RegistrationRecord[];
  events: Event[];
  loading: boolean;
  error: string | null;
  onRefresh: () => void;
}
