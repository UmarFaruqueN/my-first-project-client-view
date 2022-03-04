import React from "react";
import { Button } from '@mui/material';

const OrangeButton = (props) => {
    return (
        <>
            <Button onClick={props.onClickFun} variant="contained" color="warning">
                {props.title}
            </Button>
        </>
    );
};

export default OrangeButton;
