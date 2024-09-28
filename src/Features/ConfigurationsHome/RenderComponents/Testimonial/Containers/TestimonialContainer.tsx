import React, { useContext, useEffect, useState } from "react";
import Testimonial from "../Components/Testimonial";
import { ApiHandler } from "../../../Constants/ApiHandler";
import { NotificationManager } from "react-notifications";
import { Notify } from "../../../../Common/Notify/NotificationMessages";
import { LoginContext } from "../../../../context/LoginContext";
import { TestimonialContainerProps } from "../TestimonialTypes";
import { useNavigate } from "react-router-dom";
import { useImmer } from "use-immer";
import { handleErrorResponse } from "../../../../Common/CommonFunctions/CommonErrorHandler";
import ConfirmAlertHome from "../../../../Common/CommonComponent/ConfirmAlert";
import images from "../../../../ImageVariables";

const initialState = {
  name: "",
  about: "",
  achievement: "",
};

function TestimonialContainer() {
  const navigate = useNavigate();
  const { userInfo } = useContext(LoginContext);
  const [testimonialDetails, setTestimonialDetails] =
    useState<TestimonialContainerProps["testimonialDetails"]>(initialState);
  const [uploadedFile, setUploadedFile] = useState<File[]>([]);
  const [testiMonials, setTestiMonials] = useImmer<
    TestimonialContainerProps["testiMonials"]
  >([]);

  const handleChangeInputs = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    type: string
  ) => {
    const { value } = e.target;
    setTestimonialDetails({ ...testimonialDetails, [type]: value });
  };

  const handleChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files) {
      setUploadedFile([...e.target.files]);
    }
  };

  const handleSave = async () => {
    try {
      let form = new FormData();
      form.append("name", testimonialDetails.name);
      form.append("about", testimonialDetails.about);
      form.append("achievement", testimonialDetails.achievement);
      form.append("clientId", userInfo._id);

      if (uploadedFile.length) {
        form.append("fileToUpload", uploadedFile[0]);
      }
      const response = await ApiHandler.postTestimonial(form);
      setTestiMonials((draft) => {
        draft.push(response.results);
      });
      setUploadedFile([]);
      setTestimonialDetails(initialState);
      NotificationManager.success(Notify.ADD, "", 2000);
    } catch (err) {
      console.error(err);
      NotificationManager.warning(Notify.DEFAULT, "", 2000);
    }
  };
  const getTestiMonialData = async () => {
    const response = await ApiHandler.getTestiMonialData();
    setTestiMonials([...response.results]);
  };
  useEffect(() => {
    getTestiMonialData();
  }, [userInfo._id]);

  const handleCancel = () => {
    setUploadedFile([]);
    setTestimonialDetails(initialState);
  };
  const confirmDeleteTestimonial = (
    docId: string,
    fileKey: string,
    index: number
  ) => {
    const confirmParameters = {
      title: {
        images: images.confirmAlert,
        titleName: "CONFIRM DELETE",
      },
      descriptions: {
        first: `Are you sure you want to delete this testimonial?`,
        second: "",
      },
      buttons: {
        Yes: "Delete",
        No: "Cancel",
      },
      onClick: () => {
        deleteTestimonial(docId, fileKey, index);
      },
      buttonClassName: {
        yes: "button-delete-yes",
        no: "button-delete-no",
      },
    };
    return ConfirmAlertHome({ confirmParameters });
  };

  const deleteTestimonial = async (
    docId: string,
    fileKey: string,
    index: number
  ) => {
    try {
      await ApiHandler.deleteTestimonial(docId, fileKey);
      setTestiMonials((draft) => draft.filter((_, i) => i !== index));

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
  return (
    <Testimonial
      handleChangeInputs={handleChangeInputs}
      testimonialForms={testimonialDetails}
      handleSave={handleSave}
      handleChangeFile={handleChangeFile}
      testiMonials={testiMonials}
      uploadedFile={uploadedFile}
      handleCancel={handleCancel}
      confirmDeleteTestimonial={confirmDeleteTestimonial}
    />
  );
}

export default TestimonialContainer;
