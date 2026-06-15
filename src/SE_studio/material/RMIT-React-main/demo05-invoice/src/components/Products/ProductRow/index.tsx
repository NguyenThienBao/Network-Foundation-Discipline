import { Product } from "../../../model/Product";

interface Props {
  product : Product
}

const ProductRow : React.FC<Props> = (props: Props) => {
  const name = props.product.Stocked 
  ? props.product.Name 
  : <span style={{ color: 'red' }}>
      {props.product.Name}
    </span>
  return(
    <tr>
      <td>{name}</td>
      <td>{props.product.Price}</td>
    </tr>
  )
}

export default ProductRow