import React, {useState} from 'react'
import data from '../data/data.json'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import ConversionArea from './conversionArea';


const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));


const conversor = (props) => {

    const [massaMolar, setMassaMolar] = useState(0)
    const [formulaLida, setFormulaLida] = useState("")
    var el = "2H2SO4"

    
    function calcMassa(el){
        var els = []
        var str = ""
        var i = 0;
        var qtdGlobal = 1
    
    
        if (!isNaN(el[0])){
            qtdGlobal = el[0]
            i++
        }
    
        for(; i < el.length; i++){
    
            if(el[i+1] !== undefined &&  isNaN(el[i+1])){
                if(el[i] === el[i].toUpperCase() && el[i+1] === el[i+1].toLowerCase()){
                    //els.push(el[i]+el[i+1])
                    i++
                }
            } 
            if(el[i] === el[i].toUpperCase()){
                els.push(el[i])
            }
    
            if(isNaN(el[i+1]) || el[i+1] === undefined){
                //console.log("el[i+1]",el[i+1])
                //els.push("1")
            }
    
        }
       // console.log(els)
        for(var i= 0; i < els.length; i++){
    
                if(isNaN(els[i]) &&  isNaN(els[i+1]) ){
    
                  //  console.log("els[i]",els[i],"els[i+1]",els[i+1])
                    //els.push("1")
                    els.splice(i+1, 0, "1");
                    i++
                }
            
          
    
            
            
        }
        var fl = "";
        for(var i= 0; i < els.length; i++){
            fl+= els[i]
        }

        setFormulaLida(fl)
            
        console.log(els)

        

    
        for(var i = 0; i < els.length; i++){
            for(var j = 0; j < data.length; j++){
                if(els[i] === data[j].simbolo){
                    els[i] = data[j].massaAtomica
                }
            }
        }
        console.log(els)
        for(var i = 0; i < els.length; i++){
            if(isNaN(els[i])){
                setMassaMolar("Erro")
                return
            }
        }
    
    
        var a = [2,2,2,2]
        var result = []
        var resultado = 0
    
        
    
        for(var i = 1; i < els.length; i=i+2){
            result.push(els[i-1]*els[i])
        }
    
        for(var i = 0; i < result.length; i++){
            resultado = result[i] + resultado;
            //console.log(result[i],"+",resultado)
        }
    
        resultado = resultado*qtdGlobal
    
        setMassaMolar(resultado)
    
        
        console.log(resultado)

    }

    
   

    const classes = useStyles();
  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  //const [conversion, setConversion] =  useState("gramaMol")
  const [valueRadio, setValueRadio] = React.useState('gramaMol');

  const handleChangeRadio = (event) => {
    setValueRadio(event.target.value);

  };

    return (
        <div className="box">
            <h3>Conversor de Unidade</h3>

            <div className="form">
            <TextField
                id="standard-multiline-flexible"
                label="Fórmula da substância ex: H2O"
                multiline
                rowsMax={4}
                value={value}
                onChange={handleChange}
        />
        </div>
            <Button onClick={() => calcMassa(value)} variant="contained" color="primary">
                CALCULAR
            </Button>

            <div className="form">
                <h4>Formula lida: {formulaLida}</h4>
            </div>
            <div className="form">
                <h4>Massa Molar: {massaMolar}</h4>
            </div>

            <div className="form">
            <FormControl component="fieldset">
                <FormLabel component="legend">Converter</FormLabel>
                  <RadioGroup aria-label="gender" name="gender1" value={valueRadio} onChange={handleChangeRadio}>
                    <FormControlLabel value="gramaMol" control={<Radio />} label="De Grama para Mol" />
                    <FormControlLabel value="molGrama" control={<Radio />} label="De Mol para Grama" />
                  </RadioGroup>
            </FormControl>
            </div>

            <ConversionArea value={valueRadio} massaMolar={massaMolar}/>

        </div>
    )
}

export default conversor
