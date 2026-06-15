import React from "react"
import products from '../../data/data.json'
import ProductItem from "./ProductItem"

const Products : React.FC = () => {
  return(
    <div>
      <h3>List of Products</h3>
      {
        products.map((item, index) => 
          <ProductItem id={item.id} name={item.name} price={item.price} key={index} />
        )
      }
    </div>
  )
}

export default Products