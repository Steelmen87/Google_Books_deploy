import API from "../utils/API";

const GET_BOOKS_COUNT = 'GET_BOOKS_COUNT';
const GET_BOOKS_ITEMS = 'GET_BOOKS_ITEMS';
const VIEW_BOOK_ID = 'VIEW_BOOK_ID';


const INITIAL_STATE =
    {
        id:'',
        totalItems: 0,
        items: {
            _id: '',
            title: '',
            authors: '',
            image: '',
            link: '',
            categories: ''

        }
    }


export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case GET_BOOKS_COUNT:
            return {
                ...state,
                totalItems: action.totalItems
            };
        case GET_BOOKS_ITEMS:
            return {
                ...state,
                items: action.items
            };
            case VIEW_BOOK_ID:
            return {
                ...state,
                id: action.id
            };

        default:
            return state;
    }
};


export function viewBookIDAC(id) {
    return {
        type: VIEW_BOOK_ID,
        id
    }
}
export function GetBooksCountAC(response) {
    return {
        type: GET_BOOKS_COUNT,
        totalItems: response

    }
}

function GetBooksAC(response) {
    return {
        type: GET_BOOKS_ITEMS,
        items: response
    }
}

export async function GetBooksTotalItems(query) {
    const response = await API.getBook(query)
        .then(res => res.data.totalItems)
        .catch(err => console.error(err));
    return GetBooksCountAC(response);
}

export async function GetBooks(query, orderBy, category, maxResults, startIndex = 0) {
    const response = await API.getBookOrderBy(query, orderBy, category, maxResults, startIndex)
        .then(res => GetBooksAC(res.data.items))
        .catch(err => console.error(err));

    return GetBooksAC(response);
}




