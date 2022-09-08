import Styles from './Navbar.module.css';
import Input from './Input/Input';
import Menu from './menu';
import {Link} from 'react-router-dom';
export default function Navbar({sexo,setSexo, subcategoria, setSubCategoria, setOffset, setCalçados}){
    return(
        <div className={Styles.container}>
                <span className={Styles.centralizar}>
                    <h1 className={Styles.titulo}><Link to="/">SELVI</Link></h1>
                    <Input placeholder="O que procuras?"/>
                </span>
                <Menu setCalçados={setCalçados} setOffset={setOffset} sexo={sexo} setSexo={setSexo} subcategoria={subcategoria} setSubCategoria={setSubCategoria}/>
        </div>
    )
}