import React from "react"

type Product = {
  id : number 
  name : string 
  price: number
}

const ProductItem : React.FC<Product> = (props : Product) => {
  return(<div>{`${props.id}. ${props.name} - ${props.price}`}</div>)
}

export default ProductItem