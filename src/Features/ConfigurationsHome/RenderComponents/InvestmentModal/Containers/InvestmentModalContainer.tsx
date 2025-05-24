import React from "react";
import InvestmentModal from "../Components/InvestmentModal";

function InvestmentModalContainer({ open, onClose, setSchemeDetails }: any) {
  return (
    <InvestmentModal
      open={open}
      onClose={onClose}
      setSchemeDetails={setSchemeDetails}
    />
  );
}

export default InvestmentModalContainer;
