import React, { useContext, useState, useEffect } from "react";
import Events from "../Components/Events";
import { EventContainerProps } from "../EventsTypes";
import { ApiHandler } from "../../../Constants/ApiHandler";
import { NotificationManager } from "react-notifications";
import { Notify } from "../../../../Common/Notify/NotificationMessages";
import { GlobalDataContext } from "../../../../context/GlobalDataContext";
import { useImmer } from "use-immer";
import { LoginContext } from "../../../../context/LoginContext";
import images from "../../../../ImageVariables";
import ConfirmAlertHome from "../../../../Common/CommonComponent/ConfirmAlert/Component/ConfirmAlertHome";
import { handleErrorResponse } from "../../../../Common/CommonFunctions/CommonErrorHandler";
import { useNavigate } from "react-router-dom";

const initialState = {
  name: "",
  title: "",
  date: "",
  time: "",
  location: "",
  description: "",
};

function EventsContainer() {
  const navigate = useNavigate();
  const { userInfo } = useContext(LoginContext);
  const [eventForms, setEventForms] =
    useState<EventContainerProps["eventForms"]>(initialState);
  const [uploadedFile, setUploadedFile] = useState<File[]>([]);
  const [events, setEvents] = useImmer<EventContainerProps["events"]>([]);
  const [editBool, setEditBool] = useState(false);
  const [eventId, setEventId] = useState("");

  // Validation function
  const validateForm = () => {
    if (!eventForms.name || !eventForms.name.trim()) {
      NotificationManager.error("Event name is required", "", 3000);
      return false;
    }

    if (!eventForms.title || !eventForms.title.trim()) {
      NotificationManager.error("Event title is required", "", 3000);
      return false;
    }

    if (!eventForms.date || !eventForms.date.trim()) {
      NotificationManager.error("Event date is required", "", 3000);
      return false;
    }

    if (!eventForms.time || !eventForms.time.trim()) {
      NotificationManager.error("Event time is required", "", 3000);
      return false;
    }

    if (!eventForms.location || !eventForms.location.trim()) {
      NotificationManager.error("Event location is required", "", 3000);
      return false;
    }

    if (!eventForms.description || !eventForms.description.trim()) {
      NotificationManager.error("Event description is required", "", 3000);
      return false;
    }

    return true;
  };

  const handleChangeInputs = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    type: string
  ) => {
    const { value } = e.target;
    setEventForms((prev) => ({
      ...prev,
      [type]: value,
    }));
  };

  const handleChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setUploadedFile([...e.target.files]);
    }
  };

  const handleSave = async () => {
    // Validate form before submission
    if (!validateForm()) {
      return;
    }

    try {
      if (editBool) {
        handleUpdate();
      } else {
        let form = new FormData();
        form.append("name", eventForms.name);
        form.append("title", eventForms.title);
        form.append("date", eventForms.date);
        form.append("time", eventForms.time);
        form.append("location", eventForms.location);
        form.append("description", eventForms.description);
        form.append("status", "completed");
        form.append("clientId", userInfo._id);

        if (uploadedFile.length) {
          form.append("fileToUpload", uploadedFile[0]);
        }

        const response = await ApiHandler.postEvents(form);
        setEvents((draft) => {
          draft.unshift(response.results);
        });
        setUploadedFile([]);
        setEventForms(initialState);
        NotificationManager.success(Notify.ADD, "", 2000);
      }
    } catch (err) {
      console.error(err);
      NotificationManager.warning(Notify.DEFAULT, "", 2000);
    }
  };

  const getEventsData = async () => {
    const response = await ApiHandler.getEventsData();
    setEvents([...response.results]);
  };

  useEffect(() => {
    if (userInfo._id && !editBool) getEventsData();
  }, [userInfo._id, editBool]);

  const handleCancel = () => {
    setUploadedFile([]);
    setEventForms(initialState);
    setEditBool(false);
  };

  const confirmDeleteEvent = (
    eventId: string,
    fileKey: string,
    index: number
  ) => {
    const confirmParameters = {
      title: {
        images: images.confirmAlert,
        titleName: "CONFIRM DELETE",
      },
      descriptions: {
        first: `Are you sure you want to delete this event?`,
        second: "",
      },
      buttons: {
        Yes: "Delete",
        No: "Cancel",
      },
      onClick: () => {
        deleteEvent(eventId, fileKey, index);
      },
      buttonClassName: {
        yes: "button-delete-yes",
        no: "button-delete-no",
      },
    };
    return ConfirmAlertHome({ confirmParameters });
  };

  const deleteEvent = async (
    eventId: string,
    fileKey: string,
    index: number
  ) => {
    try {
      await ApiHandler.deleteEvent(eventId, fileKey);
      setEvents((draft) => draft.filter((_, i) => i !== index));
      NotificationManager.success(Notify.DELETE, "", 2000);
    } catch (error) {
      try {
        handleErrorResponse(error, navigate);
      } catch (error: any) {
        NotificationManager.warning(
          error?.response?.data?.message ||
            error?.response?.data?.error?.message ||
            Notify.DEFAULT
        );
      }
    }
  };

  const handleEditClick = (id: string) => {
    if (events.length > 0) {
      setEditBool(true);
      const data = events.find((ele) => ele._id === id)!;
      setEventForms(data);
      setEventId(id);
    } else setEditBool(false);
  };

  const handleUpdate = async () => {
    // Validate form before updating
    if (!validateForm()) {
      return;
    }

    try {
      let form = new FormData();
      form.append("name", eventForms.name);
      form.append("title", eventForms.title);
      form.append("date", eventForms.date);
      form.append("time", eventForms.time);
      form.append("location", eventForms.location);
      form.append("description", eventForms.description);
      form.append("status", "completed");
      form.append("clientId", userInfo._id);

      if (uploadedFile.length) {
        form.append("fileToUpload", uploadedFile[0]);
      }
      const response = await ApiHandler.updateEvents(eventId, form);
      // setTestiMonials((draft) => {
      //   draft.push(response.results);
      // });
      setUploadedFile([]);
      setEventForms(initialState);
      setEventId("");
      setEditBool(false);
      NotificationManager.success(Notify.UPDATE, "", 2000);
    } catch (err) {
      console.error(err);
      NotificationManager.warning(Notify.DEFAULT, "", 2000);
    }
  };

  return (
    <Events
      handleChangeInputs={handleChangeInputs}
      handleChangeFile={handleChangeFile}
      eventForms={eventForms}
      handleSave={handleSave}
      events={events}
      handleCancel={handleCancel}
      confirmDeleteEvent={confirmDeleteEvent}
      uploadedFile={uploadedFile}
      handleEditClick={handleEditClick}
      editBool={editBool}
    />
  );
}

export default EventsContainer;
