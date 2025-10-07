import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoredDB } from '../../utility/addToDB';

const BookDetails = () => {
    const { id } = useParams()
    const bookID = parseInt(id)
    const data = useLoaderData()
    const singleBook = data.find(book => book.bookId === bookID)
    const { bookName, image } = singleBook;
    // console.log(typeof id,data)



    const handleMarkAsRead = id => {

        addToStoredDB(id)
    }


    return (
        <div className='w-2/3 mx-auto'>
            <img className='w-48' src={image} alt="" />
            <h5>{bookName}</h5>

            <button onClick={() => handleMarkAsRead(id)} className="btn btn-accent m-2">Mark as Read</button>
            <button className="btn btn-info m-2">Add to Wish List</button>
        </div>
    );
};

export default BookDetails;