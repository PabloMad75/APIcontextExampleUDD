import { useReducer } from 'react'
import BookContext from './BookContext'
import { bookReducer } from './BookReducer'

import { axiosClient } from '../../config/api'

export const BookState = ({children}) => {

     const initialState = {
        books: [],
     }

     const [ globalState, dispatch ] = useReducer(bookReducer, initialState)

     const getBooks = async() => {
        try {
            const response = await axiosClient.get('/books')

            dispatch({
                type: "OBTENER_LIBROS",
                payload: response.data 
            })

            return response.data
        } catch (error) {
            console.log(error.message)
        }
     }

     return (
        <BookContext.Provider 
            value={{
                books: globalState.books,
                getBooks
            }}
        >
            {children}
        </BookContext.Provider>
     )
}