import React from "react";
import InvestmentModal from "../Components/InvestmentModal";

function InvestmentModalContainer({ open, onClose }: any) {
  return <InvestmentModal open={open} onClose={onClose} />;
}

export default InvestmentModalContainer;
