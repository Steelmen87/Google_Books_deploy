import React, {useEffect, useState} from "react";
import Form from "../components/Form";
import ResultsFunction from "../components/Results/indexResultFunction";
import {useDispatch, useSelector} from "react-redux";
import {GetBooks, GetBooksTotalItems} from "../reducers/SampleReducer";


function SearchFunction() {

    const dispatch = useDispatch();

    const totalItems = useSelector(state => state.sample.totalItems);
    let data = useSelector(state => state.sample.items.items);

    if (!data) {
        data = []
    }
    const [state, setState] = useState("");

    let [maxResults, setMaxResults] = useState(30);
    let [startIndex, setStartIndex] = useState(0);

    const [booksRedux, setBooksRedux] = useState([]);

    const [sortBy, setSortBy] = useState("relevance");
    const [value, setValue] = useState(" art|biography|computers|history|medical|poetry");

    useEffect(() => {
        setBooksRedux(data.map(bookData => makeBook(bookData)));
    }, [data, sortBy, value]);


    const makeBook = bookData => {
        return {
            _id: bookData.id,
            title: bookData.volumeInfo.title,
            authors: bookData.volumeInfo.authors,
            image: bookData.volumeInfo.imageLinks.thumbnail,
            link: bookData.volumeInfo.previewLink,
            categories: bookData.volumeInfo.categories,
        }
    }

    const handleInputChange = event => {
        const value = event.target.value;
        setState(value);
    };

    const handleFormSubmit = event => {
        if (!state) return;
        event.preventDefault();

        GetBooksTotalItems(state)
            .then(res => dispatch(res))
        GetBooks(state, sortBy, value)
            .then(res => dispatch(res))

    };

    const handleSetMax = event => {
        event.preventDefault();
        setStartIndex(startIndex += 30)
        GetBooks(state, sortBy, value, maxResults, startIndex)
            .then(res => dispatch(res))

    }
    return (
        <div>
            <Form
                search={state}
                handleInputChange={handleInputChange}
                handleFormSubmit={handleFormSubmit}
                sortBy={sortBy}
                setSortBy={setSortBy}
                value={value}
                setValue={setValue}
                setStartIndex={setStartIndex}
            />
            <div className="container">
                <h3>Total Search - {totalItems} - books</h3>
                <div>
                    {totalItems !== 0 && <h2>Results</h2>}
                </div>
                <ResultsFunction booksRedux={booksRedux}/>
                {totalItems !== 0 &&
                <button onClick={handleSetMax} className="btn btn-dark mt-3 mb-5"> Add more </button>}
            </div>

        </div>
    )
}

export default SearchFunction;

