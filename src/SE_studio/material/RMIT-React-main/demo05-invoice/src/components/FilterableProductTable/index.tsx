import { useState } from "react";
import { Product } from "../../model/Product";
import SearchBar from "../SearchBar";
import ProductTable from "../Products/ProductTable";

interface Props {
  products : Product[]
}

const FilterableProductTable : React.FC<Props> = (props : Props) => {
  const [filterText, setFilterText] = useState('')
  const [inStockOnly, setInStockOnly] = useState(false)

  return(
    <div>
      <SearchBar 
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={setFilterText}
        onInStockOnlyChange={setInStockOnly}
      />
      <ProductTable 
        products={props.products}
        filterText={filterText}
        inStockOnly={inStockOnly}
      />
    </div>
  )
}

export default FilterableProductTable