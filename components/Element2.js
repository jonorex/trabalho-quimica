import React from 'react'
import colors from '../utils/colors'

//Serve apenas para mostrar os acnídeos e os lantanídios em linhas separadas

const Element = (props) => {

    var display = ""
    var color
    
    if(props.number < props.n1 || props.number > props.n2 || props.number==="57-71" || props.number==="89-103"){
        display="none"
    }

    //Passar elemento para box elementos
    function getElement(){
        if(!(props.element.numeroAtomico === "57-71" || props.element.numeroAtomico === "89-103")){
          props.setElement(props.element)
          props.setColor(color)
        }
        
      }
    
      function select(){
        setSelectE(true)
      }

    if(!props.number < 88 && props.number >  104){
        display="none"
    }

    switch (props.type) {
        case "actinoid":
          color= colors.acnideos
          break
        case "lanthanoid":
          color= colors.lantanideos
          break
    }

    return (
        <>
       
        <div onClick={select} onMouseEnter={getElement}  className={props.className} style={{display: display, backgroundColor: color}}>
            <div className="element-in">
                <small style={{fontSize:"10px"}}>{props.number}</small>
                <h4>{props.simbolo}</h4>
            
             
            </div>
        </div>
        </>
    )
}

export default Element
