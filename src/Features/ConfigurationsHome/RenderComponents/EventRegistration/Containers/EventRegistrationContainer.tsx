import { useEffect, useState, useCallback } from "react";
import EventRegistration from "../Components/EventRegistration";
import { ApiHandler } from "../../../Constants/ApiHandler";
import { RegistrationRecord, Event, Client } from "../EventRegistrationTypes";

function EventRegistrationContainer() {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [events, setEvents] = useState<Event[]>([]);
  const [registrations, setRegistrations] = useState<RegistrationRecord[]>([]);

  const fetchClientEvents = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await ApiHandler.getClientEvents();
      if (response.status === "fetched" && response.results) {
        setEvents(response.results);
        // Flatten the data for table display
        const flattenedRegistrations: RegistrationRecord[] = [];
        response.results.forEach((event: Event) => {
          if (event.clientIds && event.clientIds.length > 0) {
            event.clientIds.forEach((client: Client) => {
              flattenedRegistrations.push({
                clientId: client._id,
                clientName: client.name,
                clientLastName: client.lastName,
                clientEmail: client.emailId,
                clientPhone: client.contactNo,
                eventId: event._id,
                eventName: event.name,
                eventTitle: event.title,
                eventLocation: event.location,
                eventDate: event.date,
                eventTime: event.time,
                eventStatus: event.status,
                registrationDate: event.updatedAt,
              });
            });
          }
        });
        setRegistrations(flattenedRegistrations);
      }
    } catch (err: any) {
      setError(err.message || "Failed to fetch client events");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchClientEvents();
  }, [fetchClientEvents]);

  const handleRefresh = () => {
    fetchClientEvents();
  };

  return (
    <EventRegistration
      registrations={registrations}
      events={events}
      loading={loading}
      error={error}
      onRefresh={handleRefresh}
    />
  );
}

export default EventRegistrationContainer;
