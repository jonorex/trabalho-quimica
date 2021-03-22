import React from 'react'
import ElementBigger from './ElementBigger'

const BoxElemento = (props) => {

    //Elemento recebido por propriedade do componente element/element 2
    const element = props.element
    const color = props.color

    

  
    return (
        <div style={{position:"absolute", left:"34.5%", transform: "translateX(-50%)", width:"546px", height:"180px"}}>
        <div >
            <div style={{backgroundColor: color, filter: "contrast(50%)", height:"48px", alignItems:"center", display:'flex'}}>
            <h3 style={{marginLeft:"10px", fontWeight:"500", textTransform:"uppercase", fontSize:"16px"}}>{element.nome}</h3>
        </div>
            <div style={{display:"flex"}}>
                <ElementBigger element = {element} color={props.color}/>
                <table style={{display:"flex",flexBasis:"40%"}}>
                    <tbody>
                        <tr>
                            <td>Símbolo</td>
                        </tr>
                        <tr>
                            <td>Número atômico</td>
                        </tr>
                        <tr>
                            <td>Massa atômica</td>
                        </tr>
                        <tr>
                            <td>Configuração eletrônica</td>
                        </tr>
                    </tbody>
                </table>

                <table style={{display:"flex", flexBasis:"40%"}}>
                    <tbody>
                        <tr>
                            <td>{element.simbolo}</td>
                        </tr>
                        <tr>
                            <td>{element.numeroAtomico}</td>
                        </tr>
                        <tr>
                            <td>{element.massaAtomica}</td>
                        </tr>
                        <tr>
                            <td>{element.electronicConfiguration}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            </div>
        </div>
    )
}

export default BoxElemento
