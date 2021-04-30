import React, {useState, useRef} from 'react' //biblioteca
import data from '../data/data.json' //vetor de elementos
import ConversionArea from './conversionArea';
//Biblioteca Material UI (Layout de campos)//
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';



//biblioteca Material UI
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
    const [atmQtd, setAtmQtd] = useState("")
    var el = "2H2SO4"
    var qtdGlobal = 1
    var qtdAtm = []
    var cQtdAtm = 0
    const inputEl = useRef(null);

    const [result1, setResult1] = React.useState("");
    const [result, setResult] = React.useState(""); //resultado da conversão massica
    const [mols, setMols] =  React.useState("1")
    const [avogrado, setAvogrado]  = React.useState("")


    function limpaCampos(){
        setResult1("")
        setResult("")
        setMols("1")
        setAvogrado("")
    }

    
//identifica elementos digitados
    function getFormula(el, i, str, els){
        if (!isNaN(el[0])){
            
            qtdGlobal = el[0]
            i++
            
        }
    
        for(; i < el.length; i++){
    
            if(el[i+1] !== undefined &&  isNaN(el[i+1])){
                if(el[i] === el[i].toUpperCase() && el[i+1] === el[i+1].toLowerCase()){
                    els.push(el[i]+el[i+1])
                    i++
                }
            } 
            if(el[i] === el[i].toUpperCase()){
                els.push(el[i])
            }
    
            
    
        }
        //console.log(els)

        //Preenche com 1 elementos que não tenham a quantidade especificada
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

        for(var j = 0; j < fl.length; j++){
            if(!isNaN(fl[j])){
                //console.log("cQtdM",fl[j])
                cQtdAtm = Number(fl[j])+cQtdAtm
                
            }
        }
    }

//troca os simbolos do elemento por syals respectivas massas
    function substituirElementosPorNumeros(els){
        for(var i = 0; i < els.length; i++){
            for(var j = 0; j < data.length; j++){
                if(els[i] === data[j].simbolo){
                    els[i] = data[j].massaAtomica
                }
            }
        }
    }

    function multiplicar(els, result){
        for(var i = 1; i < els.length; i=i+2){
            result.push(els[i-1]*els[i])
            console.log("result", els[i-1])
        }
    }
    
    function somar(result, resultado){
        for(var i = 0; i < result.length; i++){
            resultado = result[i] + resultado;
            //console.log(result[i],"+",resultado)
            
        }
    
        resultado = resultado*qtdGlobal
        
        cQtdAtm = cQtdAtm*qtdGlobal
        console.log("cQtdMV", cQtdAtm)
        setAtmQtd(cQtdAtm)
        setMassaMolar(resultado)
    }

////////////////////////////////////////////////////
    function calcMassa(el){
        var els = []
        var str = ""
        var i = 0;
        
    
    
        getFormula(el, i, str, els)

        
            
        //console.log(els)

        substituirElementosPorNumeros(els)
        
        console.log(els)
        /*
        for(var i = 0; i < els.length; i++){
            if(isNaN(els[i])){
                setMassaMolar("Erro")
                return
            }
        }
    
    */
        var a = [2,2,2,2]
        var result = []
        var resultado = 0
    
        
    
        multiplicar(els,result)
    
        
        somar(result, resultado)
        
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
                    <FormControlLabel onClick={() => limpaCampos()} ref={inputEl} value="gramaMol" control={<Radio />} label="De Grama para Mol" />
                    <FormControlLabel onClick={() => limpaCampos()} ref={inputEl} value="molGrama" control={<Radio />} label="De Mol para Grama" />
                  </RadioGroup>
            </FormControl>
            </div>

            <ConversionArea result1 ={result1} 
                            setResult1={setResult1}
                            result={result}
                            setResult={setResult} 
                            mols={mols}
                            setMols={setMols}
                            avogrado={avogrado}
                            setAvogrado={setAvogrado}  inputEl={inputEl} cQtdAtm={atmQtd}value={valueRadio} massaMolar={massaMolar}/>

        </div>
    )
}

export default conversor
