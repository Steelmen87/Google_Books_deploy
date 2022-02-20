import axios from "axios"

const APIkey = 'AIzaSyBBg4FoJMFAyllBNwYobkwC8S61F9vmLG4';
const url = 'https://www.googleapis.com/books/v1/volumes?'
export default {
    getBook: function (query = 'books') {
        return axios.get(`${url}key:${APIkey}&q=${query}`);
    },
    getBookOrderBy: function (query = 'books', orderBy, category,maxResults= 5,startIndex=0) {
        return axios.get(`${url}key:${APIkey}&q=${query}+subject:${category}&orderBy=${orderBy}&maxResults=${maxResults}&startIndex=${startIndex}`);
    },

};
