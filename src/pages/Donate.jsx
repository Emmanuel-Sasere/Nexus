import React from "react";
import DonateForm from "../components/donate/DonateForm";
import DonatePage from "../components/donate/DonatePage";

const Donate = () => {
  return (
    <div className="md:mt-20">
      <DonatePage />
      <DonateForm />
    </div>
  );
};

export default Donate;
