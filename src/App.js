import './App.css';
import Home from './components/pages/Home';
import Navbar from './components/pages/static/navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {
  const [produtos, setProdutos] = useState('');
  const [sexo, setSexo] = useState('');
  const [subcategoria, setSubCategoria] = useState('');
  
  const [filtro,setFiltro] = useState({
    sexo: '',
    subcategoria:'',
  });

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
        <Navbar sexo={sexo} setSexo={setSexo} subcategoria={subcategoria} setSubCategoria={setSubCategoria}/>
        <Routes>
          <Route path='/' element={<Home produtos={produtos} setProdutos={setProdutos} sexo={sexo} setSexo={setSexo}/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
