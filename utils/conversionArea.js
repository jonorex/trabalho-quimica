import React from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const conversionArea = (props) => {

    const [result, setResult] = React.useState("");
    const handleChange = (event) => {
        setResult(props);
        
    };

    const [result1, setResult1] = React.useState("");
    const handleChange2 = (event) => {
        
        if(ca1 === "1"){
            setResult(event.target.value*props.massaMolar)
        }else{
            setResult(event.target.value/props.massaMolar)
        }

        
    };


    var t1, t2
    var ca1, ca2

    if(props.value === "gramaMol"){
        t1 = "Grama"
        t2 = "Mol"
        ca1 = props.massaMolar
        ca2 = "1"
       
    }else{
        t2 = "Grama"
        t1 = "Mol"
        ca2 = props.massaMolar
        ca1 = "1"
    }


  
    return (
        <div className="form">
            <TextField
              onChange={handleChange2}
              placeholder={ca1}
              id="standard-number"
              label={t1}
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              id="standard-number"
              label={t2}
              placeholder={ca2}
              value={result}
              onChange={handleChange}
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
            />
        </div>
    )
}

export default conversionArea
