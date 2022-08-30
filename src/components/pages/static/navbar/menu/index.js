import Styles from './Menu.module.css'
import {useState} from 'react';
import {FaAlignJustify} from 'react-icons/fa';

export default function Menu({categoryModal,setCategoryModal}){
    return(
        <>
        {categoryModal==false?
            <ul className={Styles.menuNav}>
                <li onClick={()=>{categoryModal?setCategoryModal(false):setCategoryModal(true)}} className={Styles.centralizarVertical}><FaAlignJustify/>Todas as categorias</li>
                <li>Ofertas do dia</li>
                <li>Moda feminino</li>
                <li>Moda masculino</li>
                <li>Sobre</li>
            </ul>
            :
            <ul className={Styles.closeMenuNav}>
                <li onClick={()=>categoryModal?setCategoryModal(false):setCategoryModal(true)}>Fechar todas categorias</li>
            </ul>
            }
            {categoryModal&&
            <div className={Styles.categoryModal}>
                sa
            </div>
            }
        </>
    )
}