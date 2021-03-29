import React from 'react'
import Button from "./Button"

const Header = (props) => {

    return (
            <header>
                <h2>Task Tracker</h2>
                <Button onClick={props.onButton} color="steelblue" text={props.setBtnText?"Close":"Add"}></Button>  
            </header>
    )
}

Header.defaultProps={
    title:"tbm"
}

export default Header
