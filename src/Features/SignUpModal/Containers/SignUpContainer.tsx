import React from "react";
import { SignUpModalCommonTypes } from "../SignUpModalTypes";
import SignUpModal from "../Components/SignUpModal";

function SignUpContainer({
  isSignUpModalOpen,
  handleSignUpModalToggle,
}: SignUpModalCommonTypes) {
  return (
    <SignUpModal
      isSignUpModalOpen={isSignUpModalOpen}
      handleSignUpModalToggle={handleSignUpModalToggle}
    />
  );
}

export default SignUpContainer;
