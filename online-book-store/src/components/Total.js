import { Button } from '@material-ui/core'
import React from 'react'
import CurrencyFormat from "react-currency-format"
import './Total.css'
import { useStateValue } from '../Provider'
import { getBasketTotal } from '../reducer'
import { useHistory } from 'react-router-dom'


function Total() {

    const [{ basket, user }, dispatch] = useStateValue();
    const history = useHistory();

    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (

                    <>
                        <p> Total ({basket.length} items):
                        <strong>

                                <h5><b> {value} </b> </h5>

                            </strong>
                        </p>

                    </>


                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />

            <Button onClick={e => user ? history.push('/Payment') : alert('please login first')} color="primary"> Proceed to checkout </Button>

        </div>
    );
}

export default Total
