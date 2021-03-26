import React, {useEffect} from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const conversionArea = (props) => { //declaracao de componente funcional props o que ele recebeu 

    
    useEffect(() => {
        console.log("useEffect", "passou")
        const limpaCampos = () =>{
            props.setResult1("")
            props.setAvogrado("")
            props.setMols("1")
            props.setResult("")
        }
        return () =>
            limpaCampos()
       
    }, [props.inputEl])


  



  
    //evento do lado direito
    const handleChange = (event) => {//metodo que capta quando o campo é alterado
        props.setResult(props); ///fixo
        
    };

    //campoEsquerdo
    //const [result1, setResult1] = React.useState("");
    //const [result, setResult] = React.useState(""); //resultado da conversão massica
    //const [mols, setMols] =  React.useState("1")
    //const [avogrado, setAvogrado]  = React.useState("")
    
    const handleChange2 = (event) => {
        //regra de tres
        console.log("cQtdAtm",props.cQtdAtm)
        //de mol para grama
        console.log(t1)
        if(t1 === "Mol"){
            props.setResult1(event.target.value)
            props.setResult(event.target.value*props.massaMolar)
            props.setAvogrado(Number(6.02e23)*event.target.value*props.cQtdAtm)
        }
        
        //de grama para mol
        else{
            props.setResult1(event.target.value)
            props.setResult(event.target.value/props.massaMolar)
            props.setMols(event.target.value/props.massaMolar)
            props.setAvogrado(Number(6.02e23)*event.target.value/props.massaMolar*props.cQtdAtm)
        }

        

        //console.log(Number(6.02e23), mols)

        
    };


    const handleChange3 = (event) => {
        props.setAvogrado(event.target.value)
        props.setResult1(event.target.value/Number(6.02e+23)*props.massaMolar) 
        props.setResult(event.target.value/Number(6.02e+23))


        
    };


    var t1, t2
    var ca1, ca2
    var qtdAtm = props.qtdAtomo, placeholderAtmMol = "Quantidade de átomos na substância" 
 
//value argumento passado pelo conversor radioButton
    if(props.value === "gramaMol"){
        t1 = "Grama"
        t2 = "Mol"
        ca1 = props.massaMolar
        ca2 = props.mols
        //setAvogrado("")
    }else{
        t2 = "Grama"
        t1 = "Mol"
        ca2 = props.massaMolar
        ca1 = props.mols
        //setResult("")
    }


  
    return (
        <>
        <div className="form">
            {/*Campo para digitar*/}
            <TextField
              onChange={handleChange2}
              placeholder={ca1}
              id="standard-number"
              label={t1}
              value={props.result1}
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
              value={props.result}
              onChange={handleChange}
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
            />
        </div>
        

                <TextField
                id="standard-multiline-flexible"
                label={placeholderAtmMol}
                multiline
                placeholder={Number(6.02e23)*props.cQtdAtm}
                rowsMax={4}
                value={props.avogrado}
                onChange={handleChange3}
                InputLabelProps={{
                    shrink: true,
                  }}
                />  

                <p>Campo Editável (usar e+x ou e-x) como notação. Cálculo utilizado constante de avogrado x quantidade de átomos</p>
        </>
    )
}

export default conversionArea
