import React from 'react'
import Groups from '../utils/Groups'

const Grupos = (props) => {
    return (
        <div style={{marginTop:"100px", alignItems:"center",display:"flex"}}> 
            {Groups.map(g => ( 
                <>
                <div style={{backgroundColor:g.color,marginRight:"5px", marginLeft:"10px", width:"10px", height:"10px"}}></div>
                <div style={{margin:"0"}}><p style={{margin:"0"}}>{g.name}</p></div>
                </>
            ))
      }
            

            
        </div>
    )
}

export default Grupos
