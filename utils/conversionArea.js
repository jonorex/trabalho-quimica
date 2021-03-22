import React from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const conversionArea = (props) => { //declaracao de componente funcional props o que ele recebeu 

    const [result, setResult] = React.useState(""); //resultado da conversão massica
    //evento do lado direito
    const handleChange = (event) => {//metodo que capta quando o campo é alterado
        setResult(props); ///fixo
        
    };

    //campoEsquerdo
    const [result1, setResult1] = React.useState("");

    const handleChange2 = (event) => {
        //regra de tres

        //de mol para grama
        if(ca1 === "1"){
            setResult(event.target.value*props.massaMolar)
        }
        
        //de grama para mol
        else{
            setResult(event.target.value/props.massaMolar)
        }

        
    };


    var t1, t2
    var ca1, ca2
//value argumento passado pelo conversor radioButton
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
            {/*Campo para digitar*/}
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
             {/*Campo de resultado*/}
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
