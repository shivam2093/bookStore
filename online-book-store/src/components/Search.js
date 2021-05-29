import React from 'react'
import './Search.css'

const Search = (props) => {
     
    return (
        <div className="search">
            <div className="search1">
            <form onSubmit={props.searchBook} action="">
             <input onChange={props.handleSearch} type="text" style={{marginLeft:'40%', marginTop:'5%'}}/>
                    <button type="submit">Search</button>

                    <select defaultValue="Filter" onChange={props.handleSort}>
                        <option disabled value="Sort" >Sort</option>
                        <option  value="Newest" >Newest</option>
                        <option  value="Oldest" >Oldest</option>
                        
                    </select>
                </form>
                </div>
        </div>
    )
}

export default Search