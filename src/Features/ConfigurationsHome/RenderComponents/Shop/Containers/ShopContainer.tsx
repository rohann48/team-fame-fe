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
  cashback: "",
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
  const [inventorySummary, setInventorySummary] = useState<
    ShopContainerProps["inventorySummary"]
  >({
    remainingQuantity: 0,
    totalOrderedQuantity: 0,
    totalProductQuantity: 0,
  });
  const [editBool, setEditBool] = useState(false);
  const [productId, setProductId] = useState("");

  // Validation function
  const validateForm = () => {
    if (!productDetails.name || !productDetails.name.trim()) {
      NotificationManager.error("Product name is required", "", 3000);
      return false;
    }

    if (!productDetails.category || !productDetails.category.trim()) {
      NotificationManager.error("Product category is required", "", 3000);
      return false;
    }

    if (!productDetails.details || !productDetails.details.trim()) {
      NotificationManager.error("Product details are required", "", 3000);
      return false;
    }

    if (!productDetails.price || !productDetails.price.trim()) {
      NotificationManager.error("Product price is required", "", 3000);
      return false;
    }

    // Validate price is a valid number
    const priceValue = parseFloat(productDetails.price);
    if (isNaN(priceValue) || priceValue <= 0) {
      NotificationManager.error(
        "Please enter a valid price greater than 0",
        "",
        3000
      );
      return false;
    }

    if (!productDetails.cashback || !productDetails.cashback.trim()) {
      NotificationManager.error("Cashback amount is required", "", 3000);
      return false;
    }

    // Validate cashback is a valid number
    const cashbackValue = parseFloat(productDetails.cashback);
    if (isNaN(cashbackValue) || cashbackValue < 0) {
      NotificationManager.error(
        "Please enter a valid cashback amount",
        "",
        3000
      );
      return false;
    }

    return true;
  };

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
    setProducts([...response.results?.products]);
    setInventorySummary({ ...response.results?.inventorySummary });
  };

  useEffect(() => {
    if (userInfo?._id && !editBool) getProductData();
  }, [userInfo._id, editBool]);

  //save
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
        form.append("name", productDetails.name);
        form.append("details", productDetails.details);
        form.append("category", productDetails.category);
        form.append("price", productDetails.price);
        form.append("cashback", productDetails.cashback);
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
      }
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

  const handleClose = () => {
    setProductDetails({ ...initialState });
    setUploadedFiles([]);
    setEditBool(false);
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

  const handleEditClick = (id: string) => {
    if (products.length > 0) {
      setEditBool(true);
      const data: any = products.find((ele) => ele._id === id)!;
      setProductDetails(data);
      setProductId(id);
    } else setEditBool(false);
  };

  const handleUpdate = async () => {
    // Validate form before updating
    if (!validateForm()) {
      return;
    }

    try {
      let form = new FormData();
      form.append("name", productDetails.name);
      form.append("category", productDetails.category);
      form.append("details", productDetails.details);
      form.append("price", productDetails.price);
      form.append("cashback", productDetails.cashback);
      form.append("clientId", userInfo._id);

      if (uploadedFiles.length) {
        form.append("fileToUpload", uploadedFiles[0]);
      }
      const response = await ApiHandler.updateProduct(productId, form);
      setUploadedFiles([]);
      setProductDetails(initialState);
      setProductId("");
      setEditBool(false);
      NotificationManager.success(Notify.UPDATE, "", 2000);
    } catch (err) {
      console.error(err);
      NotificationManager.warning(Notify.DEFAULT, "", 2000);
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
      inventorySummary={inventorySummary}
      handleEditClick={handleEditClick}
      editBool={editBool}
      handleClose={handleClose}
    />
  );
}

export default ShopContainer;
