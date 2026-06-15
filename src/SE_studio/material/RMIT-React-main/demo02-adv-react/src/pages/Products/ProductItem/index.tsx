import { Link } from "react-router-dom"

type Product = {
  id : number 
  name : string 
  price: number
}

export const ProductItem : React.FC<Product> = (props : Product) => {
  return(<div>{`${props.id}. ${props.name} - ${props.price}`} - <Link to={`${props.id}`}>Detail</Link></div>)
}