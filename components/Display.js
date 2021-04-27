import React from 'react'

const Display = (props) => {

    

    return (
        <div style={{width:"300px", 
                    height:"50px", 
                    borderStyle:"solid", 
                    margin:"0 10px", 
                    background:"#0023ee", 
                    justifyContent:"center", 
                    alignItems:"center"}}>
            
            <h2 style={{color:"#fff", margin:"0", marginLeft:"5px", marginTop:"5px"}}>Voltagem: {props.valor}</h2>

        </div>
    )
}

export default Display
