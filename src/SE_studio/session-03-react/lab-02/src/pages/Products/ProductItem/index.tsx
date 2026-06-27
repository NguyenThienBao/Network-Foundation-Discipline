import type React from "react";
import { Link } from 'react-router-dom'

type Product = {
    id: number, 
    name: string, 
    price: number
}

const ProductItem : React.FC<Product> = (props: Product) => {
    return(
        <div>
            {`${props.id}. ${props.name} - ${props.price}`} - <Link to={`${props.id}`}>Detail</Link>
        </div>
    )
}

export default ProductItem