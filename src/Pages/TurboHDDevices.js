import React from 'react'
import ProductListing from '../Components/Body/ProductListing/ProductListing'
const subCa=  [{subCategory:"Turbo HD Camera"},{subCategory:"DVR"} ]
const TurboHDDevices=()=> {
  return (
    <ProductListing subCa={subCa} Category={"Analogue Devices"}/>
  )
}

export default TurboHDDevices


