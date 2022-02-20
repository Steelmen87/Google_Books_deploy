import React from "react";
import style from "./style.module.css"

function Form(props) {
    const handleChange = (event) => {
        props.setValue(event.target.value)
        props.setStartIndex(0)
    }
    const handleChangeSort = (event) => {
        props.setSortBy(event.target.value)
        props.setStartIndex(0)
    }

    return (
        <div className="container">
            <form>
                <div className="form-group">
                    <input
                        onChange={props.handleInputChange}
                        value={props.search}
                        name="search"
                        type="text"
                        className="form-control"
                        placeholder="Search a Book"
                        id="search"
                    />
                    <button onClick={props.handleFormSubmit} className="btn btn-dark mt-3 mb-5">
                        Search
                    </button>
                    <div className={style.containerFilter}>
                        <div className={style.item}>
                            <label>
                                Categories:
                                <select value={props.value} onChange={handleChange}>
                                    <option value="art|biography|computers|history|medical|poetry">all</option>
                                    <option value="art">art</option>
                                    <option value="biography">biography</option>
                                    <option value="computers">computers</option>
                                    <option value="history">history</option>
                                    <option value="medical">medical</option>
                                    <option value="poetry">poetry</option>
                                </select>
                            </label>
                        </div>
                        <div className={style.item}>
                            <label>
                                Sorting by:
                                <select value={props.sortBy} onChange={handleChangeSort}>
                                    <option value="relevance">relevance</option>
                                    <option value="newest">newest</option>
                                </select>
                            </label>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Form;
