import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TableRowsRounded } from "@mui/icons-material";

function createData(name, calories, fat, carbs, protein) {
     return { name, calories, fat, carbs, protein };
}


const WishlistTable = () => {


     //   useEffect(() => {
     //           axios.post(getCart, { user: user }, { headers: { "Content-Type": "application/json" } })
     //                .then((response) => {
     //                     dispatch(setCart({ cart: response.data.cartData[0].productDetail }));
     //                     console.log(cartData);
     //                })
     //                .catch((error) => {
     //                     console.log(error);
     //                });
     //      }, []);

     //      const Delete = (data) => {
     //           console.log(data);
     //           axios.post(deleCart, data, { headers: { "Content-Type": "application/json" } })
     //                .then((response) => {
     //                     dispatch(setCart({ cart: response.data.cartData[0].productDetail }));
     //                     console.log(cartData);
     //                })
     //                .catch((error) => {
     //                     console.log(error);
     //                });
     //      };


     return (
          <TableContainer component={Paper}>
               <Table sx={{ minWidth: 650 }} aria-label="simple table">
               <TableHead>
                         <TableRow>
                              <TableCell>Item</TableCell>
                              <TableCell align="right"></TableCell>
                              <TableCell align="right">Price</TableCell>
                              <TableCell align="center">Quantity</TableCell>
                              <TableCell align="right">Subtotal</TableCell>
                              <TableCell align="right"></TableCell>
                         </TableRow>
                    </TableHead>
                    <TableBody>
                      
                              {/* <TableRow key={obj._id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                                   <TableCell component="th" scope="obj">
                                        <CartImage image={obj.Image1} />
                                   </TableCell>
                                   <TableCell align="left">
                                        {" "}
                                        <Typography variant="body2">{obj.Description}</Typography>{" "}
                                   </TableCell>
                                   <TableCell align="right">{obj.SellingPrice}</TableCell>

                                   <TableCell align="center">
                                        <CartProdctIncrement s cartData={obj} />
                                   </TableCell>

                                   <TableCell align="right">{obj.SellingPrice * obj.counts} </TableCell>
                                   <TableCell align="right">
                                        <IconButton
                                             color="error"
                                             onClick={() => {
                                                  Delete(obj);
                                             }}
                                        >
                                             <DeleteIcon />
                                        </IconButton>{" "}
                                   </TableCell>
                              </TableRow> */}
                       
                    </TableBody>
               </Table>
          </TableContainer>
     );
};
export default WishlistTable;
