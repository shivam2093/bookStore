import React,{useState, useEffect} from 'react'
import {useStateValue} from '../Provider'
import 'firebase/firebase-app'
import CheckoutProduct from './CheckoutProduct'
import firebase from 'firebase';
import { Link, useHistory } from 'react-router-dom'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from '../reducer'
import axios from '../components/axios';
import firebaseApp from '../firebase'
import {db} from '../firebase'
function Payment() {

    const [{ basket, user }, dispatch] = useStateValue();
    
    const history = useHistory();
    
    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [disabled, setDisabled] = useState(true);
    const [error, setError] = useState(null);
    const [clientSecret, setClientSecret] = useState(true);
    const stripe = useStripe();
    const elements = useElements();

    const stringClient = clientSecret.toString();
    


    useEffect(() => {

        // get stripe secret to charge customer and when basket changes we have to change basket

        const getClientSecret = async () => {

            const response = await axios({
                method: 'post',
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            });

            

            setClientSecret(response.data.clientSecret)
        }
        getClientSecret();
    }, [basket])

    console.log('secret ', clientSecret);

    const handleSubmit = async (e) => {
        // after adding card details 
        e.preventDefault();
        setProcessing(true)

        //at payment time - (need client secret) tell stripe client secret 
        const payload =  stripe.confirmCardPayment(stringClient, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {

              db.collection('users')
                .doc(user?.uid)
                .collection('OrderHistory')
                .doc(paymentIntent.id)
                .set({
                    basket: basket,
                    amount: paymentIntent.amount,
                    created: paymentIntent.created
            })


            setSucceeded(true);
            setError(null);
            setProcessing(false)

            dispatch({
                type:'EMPTY_BASKET'
            })

            history.replace('/OrderHistory')

        })

    }

    const handleChange = e => {

        setDisabled(e.empty);
        setError(e.error ? e.error.message : "");

    }
   
    return (
        <div className="payment">
        <div className="payment_container">
            <h1>Hey, {user?.displayName}</h1>
            <h2>
                Checkout (<Link to="/checkout">{basket?.length} items</Link>)
            </h2>
            <div className="payment_section">
                <div className="title">
                    <h3>Confirm Address:</h3>
                </div>
                <div className="payment_address">
                    <p> USM (Testing- future implement)</p>
                </div>

            </div>
            <div className="payment_section">
                <div className="title">
                    <h3>Review your orders:</h3>
                </div>
                <div className="items">
                        {basket.map(item => (
             <CheckoutProduct
                        id={item.id}
                        image = {item.image}
                        title={item.title}

                    />))}
                </div>
            </div>

            <div className="payment_section">

                <div className="title">
                    <h3> Payment: </h3>
                </div>
                <div className="details">

                    <form onSubmit={handleSubmit}>

                        <CardElement onChange={handleChange} />

                        <div className="price">
                            <CurrencyFormat
                                renderText={(value) => (

                                    <h4>Order : {value}</h4>
                                )}
                                decimalScale={2}
                                value={getBasketTotal(basket)}
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={"$"}
                            />

                            <button disabled={processing || disabled || succeeded}>
                                <span> {processing ? <p>processing</p> : "order it!!"} </span>
                            </button>

                        </div>
                        {error && <div>{error}</div>}

                    </form>
                </div>



            </div>

        </div>
    </div>
    )
}


export default Payment

