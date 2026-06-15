import { Dispatch, SetStateAction } from "react"

interface Props {
  filterText  : string 
  inStockOnly : boolean
  onFilterTextChange : Dispatch<SetStateAction<string>>
  onInStockOnlyChange : Dispatch<SetStateAction<boolean>>
}

const SearchBar : React.FC<Props> = (props : Props) => {
  return(
    <form>
      <input 
        type="text" 
        value={props.filterText} 
        placeholder="Search..." 
        onChange={(e) => props.onFilterTextChange(e.target.value)}
      />
      <label>
        <input 
          type="checkbox" 
          checked={props.inStockOnly}
          onChange={(e) => props.onInStockOnlyChange(e.target.checked)}
        />
        {" "}
        Only show the products in stock
      </label>
    </form>
  )
}

export default SearchBar