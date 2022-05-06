import Usebooks from '../../Hooks/UseBooks/Usebooks';
import InventoryTable from './InventoryTable';


const InventoryPage = () => {
    const [books, setBooks] = Usebooks();

    const handleDelete = (id) => {
        const proceed = window.confirm("Do you want to delete this item?");
        if (proceed) {
            const url = `http://localhost:5000/inventory/${id}`;
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = books.filter(book => book._id !== id);
                    setBooks(remaining);
                })
        }
    }
    return (
        <div className="container my-5">
            <h1 className="mb-5">All Items</h1>
            <table className="table table-striped align-middle">
                <thead>
                    <tr>
                        <th scope="col">Image</th>
                        <th scope="col">Name</th>
                        <th scope="col">Description</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Supplier</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        books.map(book => <InventoryTable handleDelete={() => handleDelete(book._id)} key={book._id} book={book}></InventoryTable>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default InventoryPage;