import './App.css';
import Home from './components/pages/Home';
import Navbar from './components/pages/static/navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { useState, useEffect } from 'react';

function funcGen(sexo){
  switch(sexo){
      case '': return 'Todos';
      case 'F': return 'Feminino';
      case 'M': return 'Masculino';
      case 'N': return 'Unissex';
      case 'C': return 'Todos os produtos';
      default: return '';
  }
}

function App() {
  const [produtos, setProdutos] = useState('');
  const [sexo, setSexo] = useState('');
  const [subcategoria, setSubCategoria] = useState('');
    let url= "http://localhost/selvibackend/calcados.php?";
    if(sexo!='')url=`${url}sexo=${sexo}&`;
    if(subcategoria!='')url=`${url}subcategoria=${subcategoria}`;
     console.log(url);
     const options = {
      method: "GET",
      headers:{
        'Content-type':'application/json',
        'Accept':'application/json'
      }
    }
    useEffect(()=>{
      fetch(url,options)
      .then(resp => resp.json())
      .then(resp => setProdutos(resp))
    },[sexo,subcategoria])



  return (
    <div>
      <Router>
        <Navbar sexo={sexo} setSexo={setSexo} funcGen={funcGen} subcategoria={subcategoria} setSubCategoria={setSubCategoria}/>
        <Routes>
          <Route path='/' element={<Home produtos={produtos} setProdutos={setProdutos} sexo={sexo} setSexo={setSexo} funcGen={funcGen}/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
