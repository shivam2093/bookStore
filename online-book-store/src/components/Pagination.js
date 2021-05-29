import React from 'react'
import './Pagination.css'
const Pagination = ({ postPerPage, totalPosts, paginate }) => {

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {

        pageNumbers.push(i)
    }
    return (
        <nav style={{marginLeft:'50%'}}>
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key={number} className="page-item" style={{backgroundColor:'black'}}>
                        <a onClick={() => paginate(number)} className="page-link">
                            {number}
                        </a>

                    </li>
                ))}
            </ul>
            <div>

            </div>
        </nav>

    )
}

export default Pagination
