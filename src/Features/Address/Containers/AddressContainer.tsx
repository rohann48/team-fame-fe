import React, { useContext, useEffect, useState } from "react";
import Address from "../Components/Address";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../../context/LoginContext";
import { ApiHandler } from "../../Constants/ApiHandler";
import { NotificationManager } from "react-notifications";
import { AddressContainerType, AddressTypes } from "../AddressTypes";
import { ShopContext } from "../../context/ShopContext/ShopContext";

function AddressContainer() {
  const navigate = useNavigate();
  const { setLoginInfo, loginInfo, isEdit, setIsEdit, userInfo, setUserInfo } =
    useContext(LoginContext);
  const { productInfo, setProductInfo } = useContext(ShopContext);

  // const [refferalCode, setRefferalCode] = useState<string | null>(null);
  // const [refferalCodeList, setRefferalCodeList] = useState<Array<string>>([]);
  //state maintained for formData
  const [formData, setFormData] = useState<AddressContainerType["formData"]>(
    {} as AddressContainerType["formData"]
  );
  //error handling
  const [error, setError] = useState<AddressContainerType["error"]>(
    {} as AddressContainerType["error"]
  );
  // const handleChange = (code: string) => {
  //   setRefferalCode(code);
  // };
  // const getOfferRefferalInfo = async () => {
  //   const res = await ApiHandler.getRefferalCodeList();
  //   setRefferalCodeList([...res.results[0]?.refferedCodes]);
  // };

  // const refferalCodeCheck = async () => {
  //   if (refferalCode?.length) {
  //     if (refferalCodeList.includes(refferalCode!)) {
  //       try {
  //         const data = {
  //           refferalCode: refferalCode,
  //         };
  //         const response = await ApiHandler.validateRefferalCode(data);
  //         if (response.results) {
  //           NotificationManager.success(
  //             "Refferal code applied successfully",
  //             "",
  //             2000
  //           );
  //         } else {
  //           NotificationManager.warning("Refferal code already used", "", 2000);
  //         }
  //       } catch (error) {
  //         console.log("error", error);
  //       }
  //     } else {
  //       NotificationManager.warning("Invalid Refferal code", "", 2000);
  //     }
  //   } else {
  //     NotificationManager.warning("Refferal code required", "", 2000);
  //   }
  // };

  const placeYourOrder = async () => {
    const data = {
      amount: 20,
      name: "rohan",
      mobile: "8722840600",
    };
    const response = await ApiHandler.placeYourOrder(data);
    // if("success"){}
  };

  // useEffect(() => {
  //   getOfferRefferalInfo();
  // }, [userInfo]);
  //handle change form data
  const handleFormDataChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validateForm = (): boolean => {
    const errors: AddressContainerType["error"] =
      {} as AddressContainerType["error"];
    let isValid = true;

    // Required fields
    if (!formData.name?.trim()) {
      errors.name = "Full name is required";
      NotificationManager.warning("Full name is required", "", 2000);
      isValid = false;
    }
    if (!formData.addressLine1?.trim()) {
      errors.addressLine1 = "Address Line 1 is required";
      NotificationManager.warning("Address Line 1 is required", "", 2000);
      isValid = false;
    }
    if (!formData.pincode) {
      errors.pincode = "Pincode is required";
      NotificationManager.warning("Pincode is required", "", 2000);
      isValid = false;
    }
    if (!formData.mobile) {
      errors.mobile = "Phone number is required";
      NotificationManager.warning("Phone number is required", "", 2000);
      isValid = false;
    }
    if (!formData.paymentMode) {
      errors.paymentMode = "Payment method is required";
      NotificationManager.warning("Payment method is required", "", 2000);
      isValid = false;
    }

    // Pincode validation (assuming it should be a 6-digit number)
    if (formData.pincode && !/^\d{6}$/.test(formData.pincode.toString())) {
      errors.pincode = "Pincode should be a 6-digit number";
      NotificationManager.warning(
        "Pincode should be a 6-digit number",
        "",
        2000
      );
      isValid = false;
    }

    // Phone number validation (assuming it should be a 10-digit number)
    if (formData.mobile && !/^\d{10}$/.test(formData.mobile.toString())) {
      errors.mobile = "Phone number should be a 10-digit number";
      NotificationManager.warning(
        "Phone number should be a 10-digit number",
        "",
        2000
      );
      isValid = false;
    }

    // Set the errors in the state
    setError(errors);

    // Return true if there are no errors, false otherwise
    return isValid;
  };

  //handle submit form
  const handleSubmitForm = async () => {
    if (validateForm()) {
      try {
        let orderData: any = [];
        if (productInfo.cartBasket.length > 0) {
          productInfo.cartBasket.map((item) => {
            orderData.push({
              name: item.name,
              price: item.price,
              quantity: item.quantityCount,
              offers: {
                cashback: item?.offers?.cashback || 0,
              },
            });
          });
        }
        const modifiedData = {
          ...formData,
          amount: productInfo.catTotalAmount,
          clientId: userInfo._id,
          orderDetails: orderData,
          date: new Date(),
        };
        const response = await ApiHandler.postOrderDetails(modifiedData);
        setProductInfo({ cartBasket: [], catTotalAmount: 0 });
        NotificationManager.success("Address updated successfully", "", 2000);
        navigate("/thankyou");
      } catch (error) {
        console.log("error", error);
      }
    }
    // placeYourOrder();
  };
  return (
    <Address
      handleFormDataChange={handleFormDataChange}
      handleSubmitForm={handleSubmitForm}
      productInfo={productInfo}
      placeYourOrder={placeYourOrder}
      userInfo={userInfo}
    />
  );
}

export default AddressContainer;
