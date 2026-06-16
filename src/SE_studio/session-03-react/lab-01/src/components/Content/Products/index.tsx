/**
 * define Product component for render list of Products
 */

import React from 'react'

// import data to component

import products from '../../../data/data.json'
import ProductItem from './ProductItem'

const Products: React.FC = () => {
    return (
        <div>
            <h3>List of Products</h3>
            {products.map((item) => (
                <ProductItem 
                    key={item.id} 
                    id={item.id} 
                    name={item.name} 
                    price={item.price} 
                />
            ))}
        </div>
    );
};

export default Products