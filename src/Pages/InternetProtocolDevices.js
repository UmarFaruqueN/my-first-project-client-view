import React from "react";
import ProductListing from "../Components/Body/ProductListing/ProductListing";
const subCa = [{ subCategory: "IP Camera" }, { subCategory: "NVR" }];

const InternetProtocolDevices = () => {
     return <ProductListing subCa={subCa} Category={"Network Devices"} />;
};

export default InternetProtocolDevices;
