import type React from "react";
import { Routes, Route, Link } from "react-router-dom";

import './style.css'
import ListOfProduct from "./ListOfProduct";
import DetailOfProduct from "./DetailOfProduct";
import CreateProduct from "./CreateProduct";

const Products : React.FC = () => {
    return(
        <div className='product'>
            <h2>Product management</h2>
            <Link to="new">Create new Product</Link>
            <Routes>
                <Route index element={ <ListOfProduct /> } />
                <Route path=":id" element={ <DetailOfProduct /> } />
                <Route path="new" element={ <CreateProduct /> } />
            </Routes>
        </div>
    )
}

export default Products