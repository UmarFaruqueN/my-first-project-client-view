import React from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import Swal from "sweetalert2";
import { Button } from "@mui/material";

import { addOrder, addOrderRazorpay, getRazorpayKey } from "../../../../utlis/Constants";
import { setOrder, setCart, setCheckout } from "../../../../Redux";
import razorpay from "../../../../asset/razorpay.svg";
import { useNavigate } from "react-router-dom";

const RazorPayButton = (props) => {
     const navigate = useNavigate();
     const dispatch = useDispatch();
     const checkout = useSelector((state) => state.checkout.value);
     const address = props.userData;

     const Submit = () => {
          const orderDate = new Date().toLocaleString();
          console.log(orderDate);
          const data = { ...checkout, address, paymentType: "RazorPay", orderTime: orderDate };
          console.log();
          console.log(data);
          axios.post(addOrder, data, { headers: { "Content-Type": "application/json" } })
               .then((response) => {
                    console.log(response.data.orderData);
                    console.log();
                    Swal.fire({
                         position: "bottom-end",
                         icon: "success",
                         title: response.data.message,
                         showConfirmButton: false,
                         timer: 1500,
                         width: "15rem",
                    });

                    dispatch(setOrder({ order: response.data.orderData }));
                    dispatch(setCart({ cart: [] }));
                    dispatch(setCheckout({ checkout: {} }));
                    setTimeout(() => {
                         navigate("/myOrders");
                    }, 2000);
               })
               .catch((error) => {
                    console.log(error.response.data.message);
               });
     };

     const loadRazorpay = () => {
          const script = document.createElement("script");
          script.src = "https://checkout.razorpay.com/v1/checkout.js";
          script.onerror = () => {
               Swal.fire({
                    position: "bottom-end",
                    icon: "error",
                    title: "Check The Internet Connection",
                    showConfirmButton: false,
                    timer: 1500,
                    width: "15rem",
               });
          };
          script.onload = async () => {
               try {
                    const result = await axios.post(addOrderRazorpay, { amount: checkout.total + "00" });

                    const { amount, id: order_id, currency } = result.data;
                    const {
                         data: { key: razorpaykey },
                    } = await axios.get(getRazorpayKey);
                    const options = {
                         key: razorpaykey,
                         amount: amount.toString(),
                         currency: currency,
                         name: "example",
                         description: "testetfdgj",
                         order_id: order_id,
                         handler: async (response) => {
                              Submit();
                         },

                         prefill: {
                              name: "prefill test name",
                              email: "testt@test.com",
                              contact: "1111",
                         },
                         notes: {
                              address: "jgufigi",
                         },
                         theme: { color: "#80c070" },
                    };

                    const paymentObject = new window.Razorpay(options);
                    paymentObject.open();
               } catch (err) {
                    Swal.fire({
                         position: "bottom-end",
                         icon: "error",
                         title: err,
                         showConfirmButton: false,
                         timer: 1500,
                         width: "15rem",
                    });
               }
          };
          document.body.appendChild(script);
     };

     return (
          <>
               <Button onClick={loadRazorpay} sx={{ mb: 2 }} variant="contained" color="secondary">
                    {" "}
                    PAY WITH <img height="80%" width="25%" src={razorpay} alt="Razorpay" />
               </Button>
          </>
     );
};

export default RazorPayButton;
