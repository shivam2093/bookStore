import React, { useEffect, useState } from 'react'
import HeaderNav from './HeaderNav'
import Title from './Title'
import { useParams } from 'react-router-dom'
import './Order.css'
import Footer from './Footer'
import $ from "jquery"
const Order = () => {

    const { id } = useParams();
    const [data, setData] = useState(null);



    useEffect(() => {

     return loadData();

    },{id},[])

    const loadData = async () => {

        await fetch(`https://www.googleapis.com/books/v1/volumes/${id}?key=AIzaSyCk3Hzq1yF09oRpQr9rZ7OBW0_V5XiEq5E`)
            .then(response => response.json())
            .then(data => {
                // console.log(data)
               console.log(data)
                setData(data)
            }).catch(err =>
                console.log('what error',err))
        
    }

    

    // const loadData = () => {

    //     const settings = {
    //         "async": true,
    //         "crossDomain": true,
    //         "url": `https://www.googleapis.com/books/v1/volumes/${id}?key=AIzaSyCk3Hzq1yF09oRpQr9rZ7OBW0_V5XiEq5E`,
    //         "method": "GET",
    //         beforeSend: function (result) {
    //             result.setRequestHeader('key',AIzaSyCk3Hzq1yF09oRpQr9rZ7OBW0_V5XiEq5E)
    //         }
    //     }

    //     $.ajax(settings).done(function (response) {
    //         console.log(response.result.data)
    //         setData(response.data)
    //     })



    // }
    // console.log('look', data);

    

    return (
        <div>
            <HeaderNav />

            <Title title="Order"
              subTitle = "you are on your way..."/>
            
            <div >
              
            </div>

          
        </div>
    )
}
export default Order
