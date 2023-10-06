import {  useContext, useEffect, useState } from 'react'

import BookContext from '../context/BookContext/BookContext'

export const BookTable = () => {

    const [books, setBooks ] = useState([])
    
    const globalContext = useContext(BookContext)

    const { getBooks} = globalContext

    const getAllBooks = async() => {
        const data = await getBooks()
        setBooks(data)
    }

    useEffect(() => {
        getAllBooks()
    }, [])

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <table className="table table-dark table-hover">
                            <thead>
                                <tr>
                                    <th>Titulo</th>
                                    <th>Autor</th>
                                    <th>Precio</th>
                                    <th>Accion</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                books.map (book => (
                                    <tr key={book._id}>
                                        <td>{book.titulo}</td>
                                        <td>{book.autor}</td>
                                        <td>{book.precio}</td>
                                        <td><button className="btn btn-primary">paypal</button></td>
                                    </tr>)
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
    
}