const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser')
const stripe = require("stripe")("sk_test_51HuQG3HH6F4hGMSudrzLjaIjqQQ1K2t5cGj8pLjE1nBkq6S0ga67v4QyzvjyVnMFIDrougc0KkASYTkw6gKaUU5K00smrCqDnG")

// config

const app = express();

// middleware(security)

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// routes

app.get('/', (request, response) => response.status(200).send('hey'))
app.post('/payments/create', async (request, response) => {


    const total = request.query.total;

    console.log('payment request received', total)
    const paymentIntent = await stripe.paymentIntents.create({

        amount: total,
        currency: "usd",
    })

    response.status(201).send({

        clientSecret: paymentIntent.client_secret,
    })
})


// listen 

exports.api = functions.https.onRequest(app)

// http://localhost:5001/cravings-288600/us-central1/api