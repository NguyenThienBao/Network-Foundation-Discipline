/**
 *  define function component for Footer of page
 */

import React from 'react'
import Clock from '../Clock'
import './style.css'

type Props = { message : string}

const Footer : React.FC<Props> = (props : Props) => {
    return (
        <footer>
            <h3>{ props.message }</h3>
            <Clock state={Date.now}/>
        </footer>
    )
}

export default Footer