import React from 'react'
import Title from './Title'
import Search from './Search'
import './MainPage.css'
import BookList from './BookList'
import Pagination from './Pagination'
import { Component } from 'react'
import Footer from './Footer'
class MainPage extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
    
            books: [],
            searchField: '',
            currentPage: 3,
            postPerPage: 10,
            sort:''
             
        }
        
    }

    handleSort = (e) => {
console.log(e.target.value)
        this.setState({sort:e.target.value})
    }
    

    searchBook = (e) => {
        e.preventDefault();
        //https://booksrun.com/api/price/sell/${this.state.searchField}?key=wl6o1su2vyyvdizy6ovj
// 
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.state.searchField}&maxResults=40`)
            .then(response => response.json())
            .then(data => {
                console.log( data)
                const cleanData = this.cleanData(data)
           this.setState({books: cleanData})
        })


    }
        
        handleSearch = (e) => {

            this.setState({searchField: e.target.value})
    }
    
    cleanData = (data) => {

        const cleanedData = data.items.map((book) => {
            if (book.volumeInfo.hasOwnProperty('publishedDate') === false) {
                book.volumeInfo['publishedDate'] = 'N/A';
            }
            else if (book.volumeInfo.hasOwnProperty('imageLinks') === false) {
                book.volumeInfo['imageLinks'] = { thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg' }
            } else if (book.saleInfo.hasOwnProperty('saleability') === 'NOT_FOR_SALE') {
                
                book.saleInfo['retailPrice'] = 'N/A';
            } else if (book.saleInfo.hasOwnProperty('saleability') === 'FREE') {
                
                book.saleInfo['retailPrice'] = 'N/A';
            } else if (book.saleInfo.hasOwnProperty('saleability') === 'FOR_SALE') {
                
                book.saleInfo['retailPrice'] = book.saleInfo.retailPrice.amount;
            }
            return book;
        })

        return cleanedData;
    }
        
    
    render() {
        // pagination
        const indexOfLastPost = this.state.currentPage * this.state.postPerPage;
        const indexOfFirstPost = indexOfLastPost - this.state.postPerPage;
        const currentPosts = this.state.books.slice(indexOfFirstPost, indexOfLastPost)
        const paginate = (pageNumber) => {
            this.setState({
                currentPage: pageNumber
            })
        }
            //sorting book
            const sortedBook = this.state.books.sort((a, b) => {
                if (this.state.sort === 'Newest') {
                    return parseInt(b.volumeInfo.publishedDate.substring(0, 4)) - parseInt(a.volumeInfo.publishedDate.substring(0, 4));
                }
                else if (this.state.sort === 'Oldest') {
                    return parseInt(a.volumeInfo.publishedDate.substring(0, 4)) - parseInt(b.volumeInfo.publishedDate.substring(0, 4));
                }
            
            })
        
        return (
            <div className="wrap">
                <Title
                    title="Get your fav books"
                    subTitle="Online Book store"
                />
            
                <Search handleSearch={this.handleSearch} searchBook={this.searchBook} handleSort={this.handleSort} />
                <div className="booklist">
                <BookList  books={sortedBook}  books={currentPosts} />
                </div>
                <Pagination postPerPage={this.state.postPerPage} totalPosts={this.state.books.length} paginate={paginate}/>
                <Footer/>
            
            </div>
        )
    }
}
export default MainPage
