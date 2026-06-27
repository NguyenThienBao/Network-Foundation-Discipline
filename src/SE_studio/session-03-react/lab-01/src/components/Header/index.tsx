/**
 * Define Class component for header of page
 */

import React from 'react'

// import resources
import reactLogo from '../../assets/react.svg'
import './style.css'

// define property for component
type Props = {title : string}

// define class component
class Header extends React.Component<Props>{
    public constructor(props : Props) {
        super(props)
    }

    public render(): React.ReactNode {
        return (
            <header>
                <h1>{ this.props.title }</h1>
                <img src={reactLogo} className='logo' />
            </header>
        )
    }
}

export default Header