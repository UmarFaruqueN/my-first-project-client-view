import { Button } from '@mui/material'
import { PayPalButtons } from '@paypal/react-paypal-js'
import React from 'react'

const PayPalButton=(props)=> {
    const price = (props.checkout.total/75.71)
  return (
    <>
    <Button  color="secondary" onClick={()=>{props.setViewAll(true)}   }> cncel</Button>
    <PayPalButtons createOrder={(data, actions) => {
                    return actions.order.create({
                        purchase_units: [
                            {
                                amount: {
                                    value: "1.99",
                                },
                            },
                        ],
                    }); 
                }}
                onApprove={(data, actions) => {
                    return actions.order.capture().then((details) => {
                        const name = details.payer.name.given_name;
                        alert(`Transaction completed by ${name}`);
                    });
                }}/>
    </>
  )
}

export default PayPalButton   