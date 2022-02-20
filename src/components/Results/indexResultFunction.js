import React from "react";
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {viewBookIDAC} from "../../reducers/SampleReducer";


function ResultsFunction(props) {

    const dispatch = useDispatch();

    const viewBook = (event) => {
        /*event.preventDefault();*/
        const id = event.target.dataset.value;
        dispatch(viewBookIDAC(id))
    }
    return (
        <div>
            {!props.booksRedux.length ? (
                <h1 className="text-center">No Results to Display</h1>
            ) : (
                <div>
                    {props.booksRedux.map(result => (

                        <div className="card mb-3" key={result._id}>
                            <div className="row">
                                <div className="col-md-2">
                                    <img alt={result.title} className="img-fluid" src={result.image}/>
                                </div>
                                <div className="col-md-10">
                                    <div className="card-body">
                                        <h5 className="card-title">{result.title}</h5>
                                        <h5>{result.categories}</h5>
                                        <h5>{result.authors}</h5>
                                        <div>
                                            <NavLink to="/book">
                                                <button data-value={result._id} className="btn badge-pill btn-outline-dark mt-3"
                                                        onClick={viewBook}>View Book
                                                </button>
                                            </NavLink>
                                            <a href={result.link} className="btn badge-pill btn-outline-dark mt-3"
                                               target="_blank">View Google</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default ResultsFunction;
