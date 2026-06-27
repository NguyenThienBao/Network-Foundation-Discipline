import type React from "react"
import { Link } from "react-router-dom"

const CreateProduct : React.FC = () => {
    return (
        <form action="#">
            <h1>Create Product</h1>
            <fieldset>
                <legend>Product information</legend>
                <div>
                    <label>Product name:</label>
                    <input type="text" placeholder="Enter product name" />
                </div>
                <div>
                    <label>Price:</label>
                    <input type="number" placeholder="Enter price of product" />
                </div>
                <div>
                    <button type="button">Submit</button>
                    <Link to="/products">Cancel</Link>
                </div>
            </fieldset>
        </form>
    )
}

export default CreateProduct