import React, { useContext, useEffect, useState } from "react";
import Address from "../Components/Address";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../../context/LoginContext";
import { ApiHandler } from "../../Constants/ApiHandler";
import { NotificationManager } from "react-notifications";

function AddressContainer() {
  const navigate = useNavigate();
  const { setLoginInfo, loginInfo, isEdit, setIsEdit, userInfo, setUserInfo } =
    useContext(LoginContext);
  console.log(userInfo, "gsdgsd");
  //handle navigate to order successfully
  const handleNavigateToOrderSuccess = () => {
    navigate("/thankyou");
  };
  const [refferalCode, setRefferalCode] = useState<string | null>(null);
  const [refferalCodeList, setRefferalCodeList] = useState<Array<string>>([]);
  const handleChange = (code: string) => {
    setRefferalCode(code);
  };
  const getOfferRefferalInfo = async () => {
    const res = await ApiHandler.getRefferalCodeList();
    setRefferalCodeList([...res.results[0]?.refferedCodes]);
  };
  console.log("refferalCodeList", refferalCodeList);

  const refferalCodeCheck = async () => {
    if (refferalCode?.length) {
      if (refferalCodeList.includes(refferalCode!)) {
        try {
          const data = {
            refferalCode: refferalCode,
          };
          const response = await ApiHandler.validateRefferalCode(data);
          if (response.results) {
            NotificationManager.success(
              "Refferal code applied successfully",
              "",
              2000
            );
          } else {
            NotificationManager.warning("Refferal code already used", "", 2000);
          }
        } catch (error) {
          console.log("error", error);
        }
      } else {
        NotificationManager.warning("Invalid Refferal code", "", 2000);
      }
    } else {
      NotificationManager.warning("Refferal code required", "", 2000);
    }
  };

  useEffect(() => {
    getOfferRefferalInfo();
  }, [userInfo]);
  return (
    <Address
      handleNavigateToOrderSuccess={handleNavigateToOrderSuccess}
      refferalCodeCheck={refferalCodeCheck}
      handleChange={handleChange}
    />
  );
}

export default AddressContainer;
