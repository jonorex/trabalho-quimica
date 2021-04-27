import React from 'react'

const Upper = (props) => {
    return (
        <sub style={{verticalAlign:"super", fontSize:"12px", marginBottom:"7px"}}>{props.children}</sub>
    )
}

export default Upper
    