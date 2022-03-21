import React from 'react'
import ProductListing from '../Components/Body/ProductListing/ProductListing'

const Camera=()=> {
  const subCa=  [{subCategory:"Turbo HD Cameras"},{subCategory:"NVR"} ]
  return (
    <ProductListing subCa={subCa} Category={"Network Devices"}/>
  )
}

export default Camera