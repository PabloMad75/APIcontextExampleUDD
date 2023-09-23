import { useReducer } from 'react'

import { bookReducer } from './BookReducer'

import { axiosClient } from '../config/api'
import BookContext from './BookContext'

export const BookState = ({children}) => {

    const initialState = {
        books: []
    }

    const [globalState, dispatch] = useReducer(bookReducer, initialState)

    const getBooks = async() => {
        try {
            const response = await axiosClient.get('/books')

            

            dispatch({
                type: "OBTENER_LIBROS",
                payload: response.data
            })

            return response.data
        } catch (error) {
            console.log(error)
        }
    }

    const createBook = async(dataForm) => {
        const form = {
            titulo: dataForm.titulo,
            autor: dataForm.autor,
            precio: dataForm.precio
        }

        try {
            await axiosClient.post('/books', form)
            getBooks()
            
        } catch (error) {
            console.log(error)
        }
    }

    const updateBook = async (id, dataForm) => {

        const form = {
            id,
            titulo: dataForm.titulo,
            autor: dataForm.autor,
            precio: dataForm.precio
        }

        try {
            await axiosClient.put(`/books/${id}`, form)

            getBooks()

        } catch (error) {
            console.log(error)
        }
    }

    const deleteBook = async(id) => {
        const data = {id}

        try {
            await axiosClient.delete(`/books/${data}`)
        } catch (error) {
            console.log(error)
        }
    }



    return (
        <BookContext.Provider
            value={{
                books: globalState.books ,  
                getBooks,
                createBook,
                updateBook,
                deleteBook}}
            >
                {children}
            </BookContext.Provider>
    )


}