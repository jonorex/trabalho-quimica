import React from 'react'

const ElementBigger = (props) => {
    //Elemenro recebido do componente boxElemento
    const element = props.element
    const color = props.color
    return (
        <>
        <div style={{ alignItems:"center"}}>
        <div style={{display:"flex", height:"26.3%", backgroundColor:color, filter: "contrast(50%)",width:"100%"}}/>

        
        <div  style={{flexBasis:"20%", display:"flex", width:"100%", maxHeight:"109.19px", minWidth:"109.19px", padding:"5px",backgroundColor:color, alignItems:"center", filter: "contrast(100%)"}} /*style={{ background:color}}*/>
        
            <div style={{ justifyContent:"center", flexBasis:"54.6%"}}>
                <small style={{fontSize:"14px"}}>{element.numeroAtomico}</small>
                <div className="align">
                    <h4 style={{fontSize:"38px", textAlign:"center", display:"table"}}>{element.simbolo}</h4>
                </div>
                <div className="align">
                    <small style={{fontSize:"14px"}}>{props.nome}</small>
                </div>
            </div>
           
       
    </div>
    <div style={{display:"flex", height:"23.3%", width:"100%", backgroundColor:color, filter: "contrast(50%)"}}/>
    </div>
    </>
    )
}

export default ElementBigger
