import Styles from './Navbar.module.css';
import Input from './Input/Input';
import {useState} from 'react';
import Menu from './menu';
export default function Navbar(){
    const [categoryModal, setCategoryModal] = useState(false);
    return(
        <div className={Styles.container}>
                <span className={Styles.centralizar}>
                    <h1 className={Styles.titulo}>SELVI</h1>
                    <Input placeholder="O que procuras?"/>
                </span>
                <Menu categoryModal={categoryModal} setCategoryModal={setCategoryModal}/>
        </div>
    )
}