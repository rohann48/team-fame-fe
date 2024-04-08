import React, { useContext, useEffect, useState } from "react";
import Shop from "../Components/Shop";
import { ShopContainerProps } from "../shopTypes";
import { ApiHandler } from "../../../Constants/ApiHandler";
import { NotificationManager } from "react-notifications";
import { Notify } from "../../../../Common/Notify/NotificationMessages";
import { GlobalDataContext } from "../../../../context/GlobalDataContext";
import { LoginContext } from "../../../../context/LoginContext";

let initialState = {
  name: "",
  category: "",
  details: "",
  price: "",
};
function ShopContainer() {
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
  console.log("userInfo", userInfo);

  const getProductData = async () => {
    const response = await ApiHandler.getProductDetails();
    console.log("response", response.results);
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
      form.append("fileToUpload", uploadedFiles[0]);
      console.log("uploadedFiles", uploadedFiles[0]);
      // }
      let response = await ApiHandler.postProductDetails(form);
      setUploadedFiles([]);
      // const response = await ApiHandler.postProductDetails(modifiedData);
      console.log(response.results);
      setProducts([...products, ...response.results]);
      NotificationManager.success(Notify.ADD, "", 2000);
    } catch (err) {
      NotificationManager.warning(Notify.DEFAULT, "", 2000);
    }
  };
  console.log("products", products);

  return (
    <Shop
      handleChangeInputs={handleChangeInputs}
      productDetails={productDetails}
      handleSave={handleSave}
      eventData={eventData}
      products={products}
    />
  );
}

export default ShopContainer;
