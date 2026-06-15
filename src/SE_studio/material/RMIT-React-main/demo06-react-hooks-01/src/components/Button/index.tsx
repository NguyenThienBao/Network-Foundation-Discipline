interface Prop {
  title   : string
  disable : boolean
}
const Button : React.FC<Prop> = ({title, disable} : Prop) =>  {
  return(
    <button disabled={disable}>{title}</button>
  )
}

export default Button