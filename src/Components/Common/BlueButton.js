import React from 'react';
import { Button } from '@mui/material';




const BlueButton=(props)=> {


  return (
      <>
      <Button onClick={props.onClickFun}  variant="contained" color="secondary">{props.title}</Button>
      </>
    
  )
}

export default BlueButton