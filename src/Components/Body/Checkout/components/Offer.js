import React, { useState } from "react";
import { Grid, Typography, Button, Dialog ,TextField, IconButton} from "@mui/material";
import { Box } from "@mui/system";
import { Close } from "@mui/icons-material";

const Offer = () => {
     const [open, setOpen] = useState(false);
     const [data, setData] = useState(null);
     const [su, setSu] = useState(null);
     const [er, setEr] = useState(null);

     const handleClick = () => {
          setOpen(false);
     };
     const Click = () => {
          setOpen(true);
     };

     const Submit = ()=>{

     }
     return (
          <>
               <Button onClick={Click} color="success">
                    Apply Coupon Code
               </Button>
               <Dialog open={open}  onClose={handleClick}>
                    <Box >
                         <Grid container sx={{pb:5,display:"flex",}}  spacing={1}>

                              <Grid item sx={{ml:5,mt:5}}  >
                                   <Grid item> <Typography variant="h3" color="secondary" > Enter Coupon Code</Typography></Grid>
                                   <Grid item> <TextField fullWidth   onChange={(e) => {
                                   setData(e.target.value);
                              }}/></Grid>
                                   <Grid item sx={{display:"flex",justifyContent:"flex-end"}}> <Button color="success" onClick={Submit}>Apply</Button></Grid>
                                   <Grid item> <Typography  color="text.disabled"> Check Your Profile For Coupon Codes</Typography></Grid>
                              </Grid>
                              <Grid item >
                                   <IconButton onClick={handleClick}>
                                        <Close color="error"/>
                                   </IconButton>
                              </Grid>
                             </Grid>
                             </Box>
                    </Dialog>
          </>
     );
};

export default Offer;
