import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductListing from "../Components/Body/ProductListing/ProductListing";
import { getCatProducts } from "../utlis/Constants";
const subCa = [{ subCategory: "IP Camera" }, { subCategory: "NVR" }];

const InternetProtocolDevices = () => {
     const [data, setData] = useState([]);
     const user = localStorage.getItem("user");
     useEffect(() => {
          axios.post(getCatProducts, { Category: "Analogue Devices" }, { headers: { "Content-Type": "application/json" } })
               .then((response) => {
                    setData(response.data.CatData);
               })
               .catch((err) => {
                    console.log(err);
               });
     }, []);
     return <ProductListing Data={data} subCa={subCa} Category={"Network Devices"} />;
};

export default InternetProtocolDevices;
