import React from "react";
import {useSelector} from "react-redux";
import {NavLink} from "react-router-dom";

export default function Book({id}) {
    const books = useSelector(state => state.sample.items)
    const idBook = useSelector(state => state.sample.id)

    return (
        <div className="container" id="book">
            {books.items.map(book => book.id == idBook ? <div className="card mb-3" key={book.id}>
                <div className="row">
                    <div className="col-md-2">
                        <img alt={book.volumeInfo.title} className="img-fluid"
                             src={book.volumeInfo.imageLinks.thumbnail}/>
                    </div>
                    <div className="col-md-10">
                        <div className="card-body">
                            <p>{book.volumeInfo.categories}</p>
                            <h5 className="card-title">{book.volumeInfo.title}</h5>
                            <p>{book.volumeInfo.authors}</p>
                            <p className="card-text">{book.volumeInfo.description}</p>
                        </div>
                    </div>
                </div>
                <div>
                    <NavLink to="/">
                        <button className="btn badge-pill btn-outline-dark mt-3">
                            Back
                        </button>
                    </NavLink>
                </div>
            </div> : '')}

        </div>
    )
}
