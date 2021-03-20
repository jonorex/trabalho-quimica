import React from 'react'

const ElementBigger = (props) => {
    //Elemenro recebido do componente boxElemento
    const element = props.element
    const color = props.color
    return (
        <div  style={{flexBasis:"20%", display:"flex", width:"100%", padding:"5px",background:color}} /*style={{ background:color}}*/>
        <div style={{ justifyContent:"center"}}>
            <small style={{fontSize:"14px"}}>{element.numeroAtomico}</small>
            <div className="align">
                <h4 style={{fontSize:"38px", textAlign:"center"}}>{element.simbolo}</h4>
            </div>
            <div className="align">
                <small style={{fontSize:"14px"}}>{element.nome}</small>
            </div>
        </div>
        
    </div>
    )
}

export default ElementBigger
