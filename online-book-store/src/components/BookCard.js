import React, { Component } from 'react';
import './BookCard.css'
import { Link } from 'react-router-dom'
import {useStateValue} from '../Provider'
import {
    ShoppingCartOutlined 
} from '@ant-design/icons';
  

const BookCard = ({book}) => {
   // const { volumeInfo } = props.info;
 //   const { title, authors, subtitle, publishDate } = props.info.volumeInfo;
    const priceBook = [];
    let count = 1;
    const [{ basket }, dispatch] = useStateValue();

    const addToOrder = () => {
        // dispatch item to data layer, in order to pull data from DL 

        dispatch({
            //shoot into Data Layer 

            type: 'ADD_TO_BASKET',
            item: {
                id: book.id,
                title: book.volumeInfo.title,
                image:book.volumeInfo.imageLinks.thumbnail,
                author: book.volumeInfo.authors,
                price: book.saleInfo.saleability == 'FOR_SALE' ? book.saleInfo.retailPrice.amount : 'N/A',
            },

        });

    }


    return (
        <div className="card-container">

            <img src={book.volumeInfo.imageLinks.thumbnail} alt="" />
            
            <div className="desc" key={book.id}>
                <h2>{book.volumeInfo.title} </h2>
                <h3 style={{color:'blueviolet'}}>Author: {book.volumeInfo.authors}</h3>
                <p style={{color:'brown'}}>Published Date: {book.volumeInfo.publishedDate == 'N/A' ? 'Not Available': book.volumeInfo.publishedDate.substring(0,4)}</p>
                <p style={{ color: 'black' }}>Price: {book.saleInfo.saleability == 'FOR_SALE' ? book.saleInfo.retailPrice.amount : 'N/A' }</p>
                {/* props.price == 'N/A' ? 'Not for sale' : props.price */}
               
            </div> 
              {/* <Link to={`/Order/${book.id}`}> */}
                <button onClick={addToOrder}> Add to cart <ShoppingCartOutlined style={{fontSize:20}}/> </button>
                    {/* </Link> */}
          

        </div>
    )



}


export default BookCard