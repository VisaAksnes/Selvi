import Styles from './Menu.module.css'
import {useState} from 'react';
import {FaAlignJustify} from 'react-icons/fa';
import {AiOutlineCloseCircle} from 'react-icons/ai'
import Categorias from './ModalCategoria';
export default function Menu({sexo, setSexo, subcategoria, setSubCategoria}){
    const [categoryModal, setCategoryModal] = useState(false); //Exibir "quadrado" do modal 
    return(
        <>
        {categoryModal===false?
            <ul className={Styles.menuNav}>
                <li onClick={()=>setCategoryModal(true)} className={Styles.centralizarVertical}><FaAlignJustify/>Todas as categorias</li>
                <li onClick={()=>setSexo("F")}>Moda feminino</li>
                <li onClick={()=>setSexo("M")}>Moda masculino</li>
                <li onClick={()=>setSexo("N")}>Moda Unissex</li>
                <li>Sobre</li>
            </ul>
            :
            <ul className={Styles.closeMenuNav}>
                <li onClick={()=>setCategoryModal(false)}><AiOutlineCloseCircle/>Fechar todas categorias</li>
            </ul>
        }
        
        {categoryModal===true&&
            <div className={Styles.categoryModal}>
                <Categorias sexo={sexo} setSexo={setSexo} setCategoryModal={setCategoryModal} subcategoria={subcategoria} setSubCategoria={setSubCategoria}/>
            </div>
        }
        </>
    )
}