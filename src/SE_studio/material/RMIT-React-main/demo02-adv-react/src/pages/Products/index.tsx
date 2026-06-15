import { Link, Routes, Route } from "react-router-dom"
import { ListOfProduct } from "./ListOfProduct"
import { DetailOfProduct } from "./DetailOfProduct"
import { CreateProduct } from "./CreateProduct"

import './style.sass'

export const Products : React.FC = () => {
  return(
    <div className="product">
      <h2>Product management</h2>
      <Link to="new">Create new</Link>
      <Routes>
        <Route index element={ <ListOfProduct /> } />
        <Route path=":id" element={ <DetailOfProduct /> } />
        <Route path="new" element={ <CreateProduct /> } />
      </Routes>
    </div>
  )
}