import React, { useState } from 'react';

const BookSection = () => {
    const [books, setBooks] = useState([]);
    fetch('http://localhost:5000/limitedBooks')
        .then(res => res.json())
        .then(data=>setBooks(data))
    return (
        <div>
            {books.length}
        </div>
    );
};

export default BookSection;