import React from 'react'
import BookCard from './BookCard'
import './BookList.css'
const BookList = (props) => {

    let priceBook = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 2, 3, 4, 5, 6, 7, 8, 9, 10, 2, 3, 4, 5, 6, 7, 8, 9, 10, 2, 3, 4, 5, 6, 7, 8, 9, 10];
   const word = 'saleInfo'
    return (

        <div className = "list">
            {
                props.books.map((book, id) => {
                    // if (book.includes('volumeInfo')) {
                    //     console.log('yes it is true')
                    // }
                //    console.log('unique id', book.id)
                    return <BookCard
                        
                        key={book.id}
                        book ={book}
                    //     image={book.volumeInfo.imageLinks.thumbnail}
                    //     title={book.volumeInfo.title}
                    //     author={book.volumeInfo.authors}
                    //     published={book.volumeInfo.publishedDate}
                    //    // price = {book.filter(w => w == 'saleInfo' ?  'true' :'false')}
                    //    price={ book.saleInfo.saleability == 'FOR_SALE' ? book.saleInfo.retailPrice.amount : 'N/A'}
                        />
                })
            }    
        </div>
    )
}

export default BookList