/**
 * * define class component for header of page
 */

import React from "react"

// import resource such image
import reactLogo from '../../assets/react.svg'

type Props = { title: string }

class Header extends React.Component<Props> {
  public constructor(props: Props) {
    super(props)
  }

  public render() {
    return (
      <header>
        <h1>{ this.props.title}</h1>
        <img src={reactLogo} className='logo' />
      </header>
    )
  }
}

export default Header