import React from 'react'

const Bottom = (props) => {
    return (
        <sup style={{fontSize:"12px", verticalAlign:"baseline"}}>{props.children}</sup>
    )
}

export default Bottom
