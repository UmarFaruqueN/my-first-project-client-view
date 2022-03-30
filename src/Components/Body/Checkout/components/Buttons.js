import React, { useState } from "react";
import { Button, Grid } from "@mui/material";

const Buttons = (props) => {
     const [disabled, setDisabled] = useState(false);

     const Delivery = () => {
          props.confirmAddress();
          setDisabled(true);
     };

     const ChangeAddress = () => {
          props.changeAddress();
          setDisabled(false);
     };
     return (
          <Grid item sx={{ p: 2, display: "flex", justifyContent: "flex-end" }}>
               {disabled ? (
                    <Grid item>
                         {" "}
                         <Button onClick={ChangeAddress} color="warning" variant="contained">
                              Change Address
                         </Button>
                    </Grid>
               ) : (
                    <Grid item>
                         {" "}
                         <Button onClick={Delivery} color="secondary" variant="contained">
                              {" "}
                              Deliver Here
                         </Button>
                    </Grid>
               )}
          </Grid>
     );
};

export default Buttons;
