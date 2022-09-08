import './App.css';
import Home from './components/pages/Home';
import Navbar from './components/pages/static/navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { useState, useEffect } from 'react';

function loadCalçados(sexo,subcategoria,setCalçados,calçados,offset,setOffset){
  let url= "http://localhost/selvibackend/calcados.php?";
  if(sexo!=='')url=`${url}sexo=${sexo}&`;
  if(subcategoria!=='')url=`${url}subcategoria=${subcategoria}`;
  url = `${url}&offset=${offset}`;
  console.log(url);
    const options = {
    method: "GET",
    headers:{
      'Content-type':'application/json',
      'Accept':'application/json'
    }
  }
  fetch(url,options)
  .then(resp => resp.json())
  .then(resp => {
    setCalçados(calçados.concat(resp));
  });
}

function App() {
  const [calçados, setCalçados] = useState([]); //Array com os calçados
  const [sexo, setSexo] = useState(''); //Filtro, P.Exp: M, F, N (neutro/unissex)
  const [subcategoria, setSubCategoria] = useState(''); //Filtro, P.exp: Botas, Chinelos, etc
  const [offset, setOffset] = useState(0); //Sistema de paginação. Offset {page} e LIMIT page+10


  useEffect(()=>{ //Pegar calçados com filtro de sexo e subcategoria, load de categorias
    loadCalçados(sexo,subcategoria,setCalçados, calçados,offset,setOffset);
  },[sexo,subcategoria,offset])

 

  return (
    <div>
      <Router>
        <Navbar setCalçados={setCalçados} sexo={sexo} setOffset={setOffset} setSexo={setSexo} subcategoria={subcategoria} setSubCategoria={setSubCategoria}/>
        <Routes>
          <Route path='/' element={<Home setOffset={setOffset} offset={offset} calçados={calçados} setCalçados={setCalçados} sexo={sexo} setSexo={setSexo} subcategoria={subcategoria}/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
