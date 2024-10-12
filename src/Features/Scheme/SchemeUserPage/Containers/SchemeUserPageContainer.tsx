import React, { useContext, useEffect, useState } from "react";
import SchemeUserPage from "../Components/SchemeUserPage";
import { useParams } from "react-router-dom";
import { ApiHandler } from "../../constants/ApiHandler";
import { SchemeUserPageTypes } from "../SchemeUserPageTypes";
import { LoginContext } from "../../../context/LoginContext";
import { useImmer } from "use-immer";
import { Notify } from "../../../Common/Notify/NotificationMessages";
import { NotificationManager } from "react-notifications";

function SchemeUserPageContainer() {
  const { userId } = useParams() as { userId: string | null };
  const { userInfo } = useContext(LoginContext);
  const [investmentAmount, setInvestmentAmount] = useState<null | number>(null);
  const [selectedMonth, setSelectedMonth] = useState("");

  const [schemeUserData, setSchemeUserData] = useImmer(
    {} as SchemeUserPageTypes["schemeUserData"]
  );
  useEffect(() => {
    const fetchUserInfo = async () => {
      // Fetch user info from API using userId
      const response = await ApiHandler.fetchGoldSchemeUserInfo(userId);
      setSchemeUserData(response?.results);
    };
    if (userId) {
      fetchUserInfo();
    }
  }, [userId]);

  const handleInvestments = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { valueAsNumber } = e.target;
    setInvestmentAmount(valueAsNumber);
  };
  const postInvestment = async () => {
    if (Number(selectedMonth) !== 0 && investmentAmount !== null) {
      try {
        const modifiedData = {
          clientId: userInfo._id,
          year: schemeUserData.period,
          month: Number(selectedMonth),
          date: new Date(),
          amount: investmentAmount,
        };
        const response = await ApiHandler.postInvestment(
          userInfo.goldSchemeId,
          modifiedData
        );
        setSchemeUserData(response.results);
        NotificationManager.success(Notify.ADD, "", 2000);
      } catch (err) {}
    } else {
      NotificationManager.warning("Please fill all the fields", "", 2000);
    }
  };
  const handleSelectMonth = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMonth(e.target.value);
  };

  return (
    <SchemeUserPage
      schemeUserData={schemeUserData}
      userInfo={userInfo}
      postInvestment={postInvestment}
      handleInvestments={handleInvestments}
      handleSelectMonth={handleSelectMonth}
      selectedMonth={selectedMonth}
    />
  );
}

export default SchemeUserPageContainer;
