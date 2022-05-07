import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Pages/Home/Header/Header';
import Home from './Pages/Home/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import NotFoundPage from './Pages/NotFoundPage/NotFoundPage';
import ItemDetailsPage from './Pages/ItemDetailsPage/ItemDetailsPage';
import InventoryPage from './Pages/InventoryPage/InventoryPage';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import { ToastContainer } from 'react-toastify';
import AddNew from './Pages/AddNew/AddNew';
import MyItems from './Pages/MyItems/MyItems';
import Blogs from './Pages/Blogs/Blogs';

function App() {
  return (

    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/register" element={<Register></Register>} />
        <Route path='/inventory' element={
          <RequireAuth>
            <InventoryPage></InventoryPage>
          </RequireAuth>
        } />
        <Route path='/inventory/:id' element={
          <RequireAuth>
            <ItemDetailsPage></ItemDetailsPage>
          </RequireAuth>} >
        </Route>
        <Route path='/addItem' element={
          <RequireAuth>
            <AddNew></AddNew>
          </RequireAuth>} >
        </Route>
        <Route path='/myItems' element={
          <RequireAuth>
            <MyItems></MyItems>
          </RequireAuth>} >
        </Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='*' element={<NotFoundPage></NotFoundPage>} />
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
