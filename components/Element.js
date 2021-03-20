import React, {useState} from 'react'
import colors from '../utils/colors' //objeto de cores

const Element = (props) => {

    var display = ""
    var color


    const [selectE, setSelectE] = useState(false)

    //Elementos do 57 ao 71 não aparecem na tabela
    if(props.number > 56 && props.number <  72 ){
        display="none"
    }
    //Elementos do 89 ao 103 não aparecem na tabela
    if(props.number > 88 && props.number <  104){
        display="none"
    }

    //função para passar elemento para a BoxElemento
    function getElement(){
      if(!(props.element.numeroAtomico === "57-71" || props.element.numeroAtomico === "89-103")){
        props.setElement(props.element)
        props.setColor(color)
      }
      
    }

    function select(){
      setSelectE(true)
    }

    switch (props.type) {
        case "nonmetal":
          color = colors.naoMetais
          break;
        case "alkali metal":
          color = colors.metaisAlcalinos
          break;
       
        case "alkaline earth metal":
          color= colors.metaisAlcalinosTerrosos
          break;
        case "metalloid":
          color= colors.semeMetais
          break;
        case "metal":
          color= colors.outrosMetais 
          break
        case "probably metal":
          color="#FF54A4"
          break  
        case "transition metal":
          color=colors.metaisDeTrancisao
          break
        case "halogen":
          color= colors.halogenios  
        case "noble gas" || "probably noble gas":
          color=colors.gasesNobres
          break  
        case "actinoid":
          color=colors.acnideos
          break
        case "lanthanoid":
          color=colors.lantanideos
          break
      }

    return (
        <>
       
        <div  onClick={select} onMouseEnter={getElement} className={props.className}  style={{display: display, background:color}}>
            <div className="element-in">
                <small style={{fontSize:"10px"}}>{props.number}</small>
                <h4>{props.simbolo}</h4>
            </div>
        </div>
        </>
    )
}

export default Element
