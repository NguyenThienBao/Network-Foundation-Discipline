import './App.sass'
import FilterableProductTable from './components/FilterableProductTable'
import data from './data/data.json'
import { Product } from './model/Product'

const products : Product[] = data.map(item => new Product(item.category, item.price, item.stocked, item.name))

const App : React.FC = () => {
  return (
    <>
      <FilterableProductTable products={products} />
    </>
  )
}

export default App