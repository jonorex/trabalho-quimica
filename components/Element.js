import React, {useState} from 'react'

const Element = (props) => {

    var display = ""
    var color


    const [selectE, setSelectE] = useState(false)


    if(props.number > 56 && props.number <  72 ){
        display="none"
    }

    if(props.number > 88 && props.number <  104){
        display="none"
    }

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
          color = "#a1d344"
          break;
        case "alkali metal":
          color = "#f1b200"
          break;
       
        case "alkaline earth metal":
          color="#eada00"
          break;
        case "metalloid":
          color="#4db6ac"
          break;
        case "metal":
          color=" #a2c7d3" 
          break
        case "probably metal":
          color="#FF54A4"
          break  
        case "transition metal":
          color="#eb8e8e"
          break
        case "halogen":
          color="#70cbeb"  
        case "noble gas" || "probably noble gas":
          color="#3d9ee3"
          break  
        case "actinoid":
          color="#dcadd6"
          break
        case "lanthanoid":
          color="#90e3e9"
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
