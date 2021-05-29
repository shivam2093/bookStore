import React from 'react'
import { Button } from '@material-ui/core'
import './CheckoutProduct.css'
import { useStateValue } from '../Provider'

function CheckoutProduct({ title, id, image }) {
    
    const [{ basket }, dispatch] = useStateValue();

    const removeIt = () => {

        dispatch({
            type: 'REMOVE',
            id: id

        })

    }
    return (
        <div className="checkoutProduct">

            <div className="checkoutProduct_info">
                <div className="name_item">
                    
                <img src={`${image}`} className="checkoutProduct_title"/> &nbsp;
                    <p className="checkoutProduct_title">{title}</p>
                </div>

            </div>

            <div className="checkoutProduct_right">
                <div className="button_remove">
                    <Button color="primary" onClick={removeIt}> Remove from orders </Button>
                </div>
            </div>

        </div>
    )
}

export default CheckoutProduct
