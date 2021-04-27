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

import colors from '../utils/colors';

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
  const [eletrodo1, setEletrodo1] = React.useState('')
  const [eletrodo2, setEletrodo2] = React.useState('')
  const [data1, setData1] = React.useState('')
  const [data2, setData2] = React.useState('')

  

  const handleChange = (event) => {
    setData1(event.target.value[0])
    if(event.target.value[1] === "cat"){
      element.simbolo = event.target.value[0].Cat;
      element.numeroAtomico = event.target.value[0].PotencialCat
    }else{
      element.simbolo = event.target.value[0].Anado;
      element.numeroAtomico = event.target.value[0].PotencialAn
    }
    
    setEl1(element);

    
    if(el2 !== ''){
      calcVoltagem(element.numeroAtomico, el2.numeroAtomico,event.target.value[0], data2)
    }
  };

  const handleChange2 = (event) => {
    setData2(event.target.value[0])
    if(event.target.value[1] === "cat"){
      element.simbolo = event.target.value[0].Cat;
      element.numeroAtomico = event.target.value[0].PotencialCat
    }else{
      element.simbolo = event.target.value[0].Anado;
      element.numeroAtomico = event.target.value[0].PotencialAn
    }
    setEl2(element);
    if(el1 !== ''){
      calcVoltagem(el1.numeroAtomico, element.numeroAtomico,data1,event.target.value[0])

    }
  };



  function calcVoltagem(a,b,elcA,elcB){
    console.log("a: ",a, " b: ",b)
    var volts
    if(a > b){
      setElB("Ânado") 
      setElA("Cátado") 
      volts = parseFloat(a-b).toFixed(2)
      setVolts(volts);

      var element1 = {
        numeroAtomico:elcA.PotencialCat,
        //nome: "nome",
        simbolo:elcA.Cat
    }
      setEletrodo1(element1)

      var element2 = {
        numeroAtomico: elcB.PotencialAn,
        simbolo: elcB.Anado
      }
      setEletrodo2(element2)

    }else{
      setElB("Cátado") 
      setElA("Ânado") 
      volts = parseFloat(b-a).toFixed(2)
      setVolts(volts);
      var element1 = {
        numeroAtomico:elcA.PotencialAn,
        //nome: "nome",
        simbolo:elcA.Anado
    }
      setEletrodo1(element1)

      var element2 = {
        numeroAtomico: elcB.PotencialCat,
        simbolo: elcB.Cat
      }
      setEletrodo2(element2)

      
    }

    if(volts < 0 ){
      setVolts("Erro: não é pilha")
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
              
            <MenuItem value={[s, "cat"]}>{s.Cat}</MenuItem>
              
              
            ))
          }

          {
            dataPotenciais.map(s => (
              
            <MenuItem value={[s, "an"]}>{s.Anado}</MenuItem>
              
              
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
              
            <MenuItem value={[s, "cat"]}>{s.Cat}</MenuItem>
              
              
            ))
          }

          {
            dataPotenciais.map(s => (
              
            <MenuItem value={[s, "an"]}>{s.Anado}</MenuItem>
              
              
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

      <div style={{display:"flex", justifyContent:"center", alignItems:"center", margin:"10px 10px"}}>
          

          <ElementBigger color={colors.lantanideos} element={eletrodo1} nome={elA}/>
          <h4 style={{marginBottom:"40px"}}>Eletrodos Resultantes</h4>
          <ElementBigger color={colors.acnideos} element={eletrodo2} nome={elB}/>
      </div>
        

    </div>
    )
}

export default Pilhas
