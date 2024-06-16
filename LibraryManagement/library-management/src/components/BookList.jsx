import React, { useContext, useEffect, useState } from "react";
import Book from '../assets/book.png';
import useFetch from "../hooks/useFetch";
import { Link, useLocation } from "react-router-dom";
import {useTheme} from '../hooks/useTheme';
import { db } from '../firebase/index';
import { collection, deleteDoc, doc, getDocs, onSnapshot, orderBy, query } from 'firebase/firestore';
import Delete from '../assets/delete.svg';
import pencil from '../assets/pencil.svg';

import { AuthContext } from "../useContext/AuthContext";


function BookList(){
    
    let location=useLocation();
    let params=new URLSearchParams(location.search);
    let search=params.get('search');
    // console.log(search);
    // let url=`http://localhost:3000/books${search?`?title=${search}`:''}`;
    // let {data:books,loading,error}=useFetch(url);
    let [error, setError] = useState('');
    let [books, setBooks] = useState([]);
    let [loading, setLoading] = useState(false);

    let { user } = useContext(AuthContext);
    let deleteBook = async (e, id) => {
        e.preventDefault();
        let ref = doc(db, 'books', id);
        await deleteDoc(ref); //backend delete
    }

    useEffect(function () {
        setLoading(true)
        let ref = collection(db, 'books');
        let q = query(ref, orderBy('date', 'desc'))
        onSnapshot(q, docs => {
            if (docs.empty) {
                setError('no documents found');
                setLoading(false)
            } else {
                let books = [];
                docs.forEach(doc => {
                    let book = { id: doc.id, ...doc.data() }
                    books.push(book)
                })
                setBooks(books)
                setLoading(false)
                setError('');
            }
        })
    }, [])
    
    let { isDark } = useTheme();
    return (
        <div>
            {loading && <p>loading ... </p>}
            {/* book list */}
            {!!books && (
                <div className='grid grid-cols-2 md:grid-cols-4 gap-4 my-3'>
                    {books.map((b) => (
                    <Link to={`/books/${b.id}`}>
                        <div className={`p-4 border border-1 ${isDark ? 'text-white bg-dcard border-primary' : ''}`}  >
                            <img src={Book} alt="" />
                            <div className='text-center space-y-2 mt-3'>
                                <h1>{b.title}</h1>
                                <p>{b.description}</p>
                                {/* genres */}
                                <div className='flex flex-wrap'>
                                    {b.categories.map(c => (
                                    <span key={c} className='mx-1 my-1 text-white rounded-full px-2 py-1 text-sm bg-blue-500'> {c}</span>
                                    ))}
                                </div>
                                <div className='flex space-x-5 items-center'>
                                    <Link to={`/edit/${b.id}`}>
                                        <img src={pencil} alt="" />
                                    </Link>
                                    <img src={Delete} alt="" onClick={(e) => deleteBook(e, b.id)}/>
                                </div>
                            </div>
                        </div>
                    </Link>
                            
                        
                    ))}
                </div>
            )}
        </div>
    )
}

export default BookList;