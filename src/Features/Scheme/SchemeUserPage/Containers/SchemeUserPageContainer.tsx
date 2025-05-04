import React, { useContext, useEffect, useState } from "react";
import SchemeUserPage from "../Components/SchemeUserPage";
import { useParams } from "react-router-dom";
import { ApiHandler } from "../../constants/ApiHandler";
import {
  SchemeUserErrorTypes,
  SchemeUserPageTypes,
} from "../SchemeUserPageTypes";
import { LoginContext } from "../../../context/LoginContext";
import { useImmer } from "use-immer";
import { Notify } from "../../../Common/Notify/NotificationMessages";
import { NotificationManager } from "react-notifications";

function SchemeUserPageContainer() {
  const { userId } = useParams() as { userId: string | null };
  const { userInfo } = useContext(LoginContext);
  const [investmentAmount, setInvestmentAmount] = useState<number>(0);
  const [selectedMonth, setSelectedMonth] = useState("");

  const [schemeUserData, setSchemeUserData] = useImmer(
    {} as SchemeUserPageTypes["schemeUserData"]
  );

  const [error, setError] = useState<SchemeUserErrorTypes["error"]>(
    {} as SchemeUserErrorTypes["error"]
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
  const [errorLog, setErrorLog] = useState(false);
  const handleInvestments = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { valueAsNumber } = e.target;
    setInvestmentAmount(valueAsNumber);
  };

  const validateForm = (): boolean => {
    const errors: any = {};
    let isValid = true;

    // Required fields
    if (!investmentAmount) {
      errors.investmentAmount = "Please fill the investment amount";
      NotificationManager.warning(errors.investmentAmount, "", 2000);
      isValid = false;
    }
    if (Number(selectedMonth) == 0 || !selectedMonth) {
      errors.selectedMonth = "Please select a month";
      NotificationManager.warning(errors.selectedMonth, "", 2000);
      isValid = false;
    }
    // Set the errors in the state
    setError(errors);

    // Return true if there are no errors, false otherwise
    return isValid;
  };

  const postInvestment = async () => {
    if (investmentAmount > 0 && validateForm()) {
      try {
        setErrorLog(false);
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
        setInvestmentAmount(0);
        setSelectedMonth("");
      } catch (err) {}
    } else {
      setErrorLog(true);
      // NotificationManager.warning("Please fill all the fields", "", 2000);
    }
  };
  const handleSelectMonth = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMonth(e.target.value);
  };

  return (
    <SchemeUserPage
      schemeUserData={schemeUserData}
      userInfo={userInfo}
      // postInvestment={postInvestment}
      handleInvestments={handleInvestments}
      handleSelectMonth={handleSelectMonth}
      selectedMonth={selectedMonth}
      investmentAmount={investmentAmount}
      setSchemeUserData={setSchemeUserData}
      validateForm={validateForm}
      postInvestment={postInvestment}
    />
  );
}

export default SchemeUserPageContainer;
