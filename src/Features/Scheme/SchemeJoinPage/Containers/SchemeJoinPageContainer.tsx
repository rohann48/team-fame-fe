import React, { useContext, useEffect, useState } from "react";
import SchemeJoinPage from "../Components/SchemeJoinPage";
import { LoginContext } from "../../../context/LoginContext";
import { ApiHandler } from "../../constants/ApiHandler";
import { GlobalDataContext } from "../../../context/GlobalDataContext";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { NotificationManager } from "react-notifications";
import { Notify } from "../../../Common/Notify/NotificationMessages";

function SchemeJoinPageContainer() {
  const { handleSignUpModalToggle, userInfo } = useContext(LoginContext);
  //navigate
  const navigate = useNavigate();
  //state maintained for period
  const [period, setPeriod] = useState(12);
  //state for gold rate
  const [goldRate, setGoldRate] = useState([]);
  //get gold rate
  useEffect(() => {
    const getGoldRate = async () => {
      try {
        const response = await ApiHandler.getGoldRate();
        setGoldRate(response);
        //set gold rate in context
      } catch (error) {
        console.error("Failed to get gold rate:", error);
      }
    };
    getGoldRate();
  }, []);
  const handleSelectPeriod = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPeriod(Number(e.target.value));
  };

  function addMonthsToDate(startDate: Date, months: number) {
    const date = new Date(startDate);
    date.setMonth(date.getMonth() + months);
    return date;
  }

  const handleJoinScheme = async (id: string) => {
    const endDate = addMonthsToDate(new Date(), period);
    const formattedEndDate = format(endDate, "yyyy-MM-dd");
    if (userInfo.goldSchemeId) {
      navigate(`users/${id}`);
      return;
    }
    try {
      let modifiedData = {
        clientId: id,
        period: period,
        startDate: format(new Date(), "yyyy-MM-dd"),
        endDate: formattedEndDate,
      };
      await ApiHandler.JoinScheme(modifiedData);
      navigate(`users/${id}`);
      NotificationManager.success(Notify.ADD, "", 2000);
    } catch (err) {
      NotificationManager.warning(err, "", 2000);
    }
  };
  return (
    <SchemeJoinPage
      handleSignUpModalToggle={handleSignUpModalToggle}
      userInfo={userInfo}
      handleJoinScheme={handleJoinScheme}
      handleSelectPeriod={handleSelectPeriod}
    />
  );
}

export default SchemeJoinPageContainer;
