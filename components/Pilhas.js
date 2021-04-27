import React from 'react'
import data from '../data/dataPotenciais'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import ElementBigger from './ElementBigger';
import Display from './Display'
import dataE from "../data/data.json"
import dataPotenciais from '../data/dataPotenciais';
import Bottom from '../utils/Bottom';
import Upper from '../utils/Upper';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

  

const Pilhas = () => {
    var potenciais = data
    var element = {
      numeroAtomico:"volts",
      nome: "nome",
      simbolo:"simbolo"
      
  }

  const classes = useStyles();
  const [el1, setEl1] = React.useState('');
  const [el2, setEl2] = React.useState('');
  const [volts, setVolts] = React.useState('');
  const [elA, setElA] = React.useState('')
  const [elB, setElB] = React.useState('')

  const handleChange = (event) => {
    element.simbolo = event.target.value[1];
    element.numeroAtomico = event.target.value[0]
    setEl1(element);

    if(el2 !== ''){
      calcVoltagem(event.target.value[0], el2.numeroAtomico)
    }
  };

  const handleChange2 = (event) => {
    element.simbolo = event.target.value[1];
    element.numeroAtomico = event.target.value[0]
    setEl2(element);
    if(el1 !== ''){
      calcVoltagem(el1.numeroAtomico, event.target.value[0])

    }
  };



  function calcVoltagem(a,b){
    console.log("a: ",a, " b: ",b)
    if(a > b){
      setElB("Ânado") 
      setElA("Cátado") 
      setVolts(parseFloat(a-b).toFixed(2));
    }else{
      setElB("Cátado") 
      setElA("Ânado") 
      setVolts(parseFloat(b-a).toFixed(2));
    }
    
  }

   

    return (
        <div className="box">
        <div style={{display:"flex"}}>
        <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Elemento 1</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={el1}
          onChange={handleChange}
        >
          {
            dataPotenciais.map(s => (
              
            <MenuItem value={[s.Potencial, s.Formula]}>{s.Formula}</MenuItem>
              
              
            ))
          }
          
        </Select>
      </FormControl>

      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Elemento 2</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={el2}
          onChange={handleChange2}
        >
          {
            dataPotenciais.map(s => (
              
            <MenuItem value={[s.Potencial, s.Formula]}>{s.Formula}</MenuItem>
              
              
            ))
          }
          
        </Select>
      </FormControl>
      </div>

      <div style={{display:"flex", justifyContent:"center", alignItems:"center", margin:"10px 10px"}}>
          <ElementBigger color="green" element ={el1} nome={elA}/>
          <Display valor={volts}/>
          <ElementBigger color="blue"  element={el2} nome={elB}/>
      </div>
        

    </div>
    )
}

export default Pilhas
