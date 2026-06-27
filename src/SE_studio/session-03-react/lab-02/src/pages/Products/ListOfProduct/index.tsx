import React from "react"

import data from "../../../data/data.json"
import ProductItem from "../ProductItem"

const ListOfProduct : React.FC = () => {
    return (
        <>
            <h3>List of Product</h3>
            {
                data.map((item, index) =>
                    <ProductItem key={index} id={item.id} name={item.name} price={item.price} />
                )
            }
        </>
    )
}

export default ListOfProduct