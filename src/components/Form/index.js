import React,{useMemo} from "react";
import style from "./style.module.css"

const Form = ({
                  setStartIndex,
                  setValue,
                  setSortBy,
                  handleInputChange,
                  search,
                  handleFormSubmit,
                  value, sortBy
              }) => {
    const handleChange = (event) => {
        setValue(event.target.value)
        setStartIndex(0)
    }
    const handleChangeSort = (event) => {
        setSortBy(event.target.value)
        setStartIndex(0)
    }

    return (
        <div className="container">
            <form>
                <div className="form-group">
                    <input
                        onChange={handleInputChange}
                        value={search}
                        name="search"
                        type="text"
                        className="form-control"
                        placeholder="Search a Book"
                        id="search"
                    />
                    <button onClick={handleFormSubmit} className="btn btn-dark mt-3 mb-5">
                        Search
                    </button>
                    <div className={style.containerFilter}>
                        <div className={style.item}>
                            <label>
                                Categories:
                                <select value={value} onChange={handleChange}>
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
                                <select value={sortBy} onChange={handleChangeSort}>
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
const MemoizedForm = React.memo(Form)
export default MemoizedForm;
