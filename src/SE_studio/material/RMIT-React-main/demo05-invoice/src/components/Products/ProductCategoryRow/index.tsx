interface Props {
  category: string
}

const ProductCategoryRow : React.FC<Props> = (props : Props) => {
  return (
    <tr>
      <th colSpan={2}>
        {props.category}
      </th>
    </tr>
  )
}

export default ProductCategoryRow
