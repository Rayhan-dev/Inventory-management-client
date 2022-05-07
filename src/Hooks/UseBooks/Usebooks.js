import  { useEffect, useState } from 'react';

const Usebooks = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch("https://stark-fortress-57443.herokuapp.com/books")
            .then((res) => res.json())
            .then((data) => setBooks(data));
    }, [setBooks]);
    return [books,setBooks];
};

export default Usebooks;