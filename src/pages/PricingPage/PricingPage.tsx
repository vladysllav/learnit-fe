import React from "react";
// Components Import
import PricingMain from "../../components/PricingPage/PricingMain";
import PricingImageOne from "../../components/PricingPage/PricingImageOne";
import PricingTable from "../../components/PricingPage/PricingTable";
import PricingImageTwo from "../../components/PricingPage/PricingImageTwo";

const PricingPage = () => {
  return (
    <>
      <PricingMain />
      <PricingImageOne />
      <PricingTable />
      <PricingImageTwo />
    </>
  );
};

export default PricingPage;