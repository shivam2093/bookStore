import React from 'react'
import {useStateValue} from '../Provider'
import PropTypes from 'prop-types'
import CheckoutProduct from './CheckoutProduct'
import Total from './Total'
import './Checkout.css'
function Checkout(props) {

    const [{ basket }, dispatch] = useStateValue();


    return (
        <div className="checkout">
        <div className="checkout_left">
            <h1 className="checkout_title"> Your Orders: </h1>

            {basket.map(item => (
                <CheckoutProduct
                    id={item.id}
                    image = {item.image}
                    title={item.title}
                    

                />
            ))}

            {/* checkout Product*/}
        </div>

        <div className="checkout_right">
            <h3> Summary: </h3>
            <Total />
        </div>


    </div>
    )
}



export default Checkout

