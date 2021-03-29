import React from 'react'
import PropTypes from 'prop-types'

const Button = (props) => {
    return (
        <button className="btn" onClick={props.onClick} style={{backgroundColor:props.color}}>{props.text}</button>
    )
}
Button.defaultProps={
    color:"green"
}

Button.propTypes={
    color:PropTypes.string,
    text:PropTypes.string
}

export default Button
