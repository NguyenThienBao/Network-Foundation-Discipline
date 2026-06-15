import { Link } from "react-router-dom"

export const CreateProduct : React.FC = () => {
  return(
    <form action="#">
      <h1>Create new Product information</h1>
      <fieldset>
        <legend>Prodcution information</legend>
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