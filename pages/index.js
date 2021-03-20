import {useState, useEffect} from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import data from '../data/data.json'
import Element from '../components/Element'
import Element2 from '../components/Element2'
import BoxElemento from '../components/BoxElemento'
import Conversor from '../utils/conversor'
import Grupos from '../components/Grupos'

export default function Home() {

  var elementClass = ""

  const [element, setElement] = useState(data[0])
  const [color, setColor] = useState("")

  return (
    <div className="container">


    <BoxElemento color={color} element={element}/>
{/*TABELA PERÍODICA PRINCIPAL*/}
    <div className="table">
      {data.map(s => (
        <>
        
        <Element setColor={setColor} setElement={setElement} element = {s} type={s.groupBlock} number={s.numeroAtomico} simbolo={s.simbolo} nome = {s.nome} className={elementClass.concat("element element-",s.numeroAtomico)}>{s.numeroAtomico}</Element>
        </>
      ))
      }
    </div>
{/*LANTANÍDIOS*/}
    <div className="table" style={{margin:"20px auto", marginLeft:"180px"}}>
      {data.map(s => (
        <>
        
        <Element2 setColor={setColor} setElement={setElement}  element = {s} type={s.groupBlock} n1={57} n2={71} number={s.numeroAtomico} simbolo={s.simbolo} nome = {s.nome} className={elementClass.concat("element element-",s.numeroAtomico,"x")}>{s.numeroAtomico}</Element2>
        </>
      ))
      }
    </div>
    {/*ACNÍDIOS*/}
    <div className="table"  style={{margin:"0 auto", marginLeft:"180px"}}> 
      {data.map(s => (
        <>
        
        <Element2 setColor={setColor} setElement={setElement} element = {s} type={s.groupBlock} n1={89} n2={103} number={s.numeroAtomico} simbolo={s.simbolo} nome = {s.nome} className={elementClass.concat("element element-",s.numeroAtomico,"x")}>{s.numeroAtomico}</Element2>
        </>
      ))
      }
    </div>

    <Grupos/>
{/*ÁREA DE CONVERÇÃO*/}
      <Conversor/>

      

    </div>
  )
}
