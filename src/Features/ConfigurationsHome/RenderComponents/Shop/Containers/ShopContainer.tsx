import React, { useContext, useEffect, useState } from "react";
import Shop from "../Components/Shop";
import { ShopContainerProps } from "../shopTypes";
import { ApiHandler } from "../../../Constants/ApiHandler";
import { NotificationManager } from "react-notifications";
import { Notify } from "../../../../Common/Notify/NotificationMessages";
import { GlobalDataContext } from "../../../../context/GlobalDataContext";
import { LoginContext } from "../../../../context/LoginContext";
import images from "../../../../ImageVariables";
import ConfirmAlertHome from "../../../../Common/CommonComponent/ConfirmAlert/Component/ConfirmAlertHome";
import { handleErrorResponse } from "../../../../Common/CommonFunctions/CommonErrorHandler";
import { useNavigate } from "react-router-dom";

let initialState = {
  name: "",
  category: "",
  details: "",
  price: "",
};
function ShopContainer() {
  const navigate = useNavigate();
  const { eventData } = useContext(GlobalDataContext);
  const { userInfo } = useContext(LoginContext);
  const [productDetails, setProductDetails] = useState<
    ShopContainerProps["productDetails"]
  >({ ...initialState });
  const [uploadedFiles, setUploadedFiles] = useState<any>({});
  const [products, setProducts] = useState<ShopContainerProps["products"]>([]);
  //handle change form inputs
  const handleChangeInputs = (e: any, type: string) => {
    const { value } = e.target;
    if (type === "image") {
      setUploadedFiles(e.target.files);
    } else {
      setProductDetails({ ...productDetails, [type]: value });
    }
  };

  const getProductData = async () => {
    const response = await ApiHandler.getProductDetails();
    setProducts([...response.results]);
  };
  useEffect(() => {
    getProductData();
  }, [userInfo._id]);

  //save
  const handleSave = async () => {
    try {
      let form = new FormData();
      form.append("name", productDetails.name);
      form.append("details", productDetails.details);
      form.append("category", productDetails.category);
      form.append("price", productDetails.price);
      form.append("clientId", userInfo._id);
      // for (let i = 0; i < uploadedFiles.length; i++) {
      if (uploadedFiles.length) {
        form.append("fileToUpload", uploadedFiles[0]);
      }
      // }
      let response = await ApiHandler.postProductDetails(form);
      setUploadedFiles([]);
      // const response = await ApiHandler.postProductDetails(modifiedData);
      setProducts([...products, response.results]);
      NotificationManager.success(Notify.ADD, "", 2000);
    } catch (err) {
      console.log(err);
      NotificationManager.warning(Notify.DEFAULT, "", 2000);
    }
  };
  //confirm delete
  const confirmDeleteThreadFile = (
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
        first: `Are you sure you want to delete a file ?`,
        second: "",
      },
      buttons: {
        Yes: "Delete",
        No: "Cancel",
      },
      onClick: () => {
        deleteProduct(docId, fileKey, index);
      },
      buttonClassName: {
        yes: "button-delete-yes",
        no: "button-delete-no",
      },
    };
    return ConfirmAlertHome({ confirmParameters });
  };
  const deleteProduct = async (
    docId: string,
    fileKey: string,
    index: number
  ) => {
    try {
      await ApiHandler.deleteProductDetails(docId, fileKey);
      setProducts((prevState) => prevState.filter((_, i) => i !== index));
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
    <Shop
      handleChangeInputs={handleChangeInputs}
      productDetails={productDetails}
      handleSave={handleSave}
      eventData={eventData}
      products={products}
      confirmDeleteThreadFile={confirmDeleteThreadFile}
    />
  );
}

export default ShopContainer;
