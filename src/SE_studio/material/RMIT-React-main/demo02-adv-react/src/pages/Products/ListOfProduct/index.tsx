import data from '../../../data/data.json'
import { ProductItem } from '../ProductItem'

export const ListOfProduct : React.FC = () => {
  return (
    <>
      <h2>List of products</h2>
      {
        data.map((item, index) =>
          <ProductItem key={index} id={item.id} name={item.name} price={item.price} />
        )
      }
    </>
  )
}