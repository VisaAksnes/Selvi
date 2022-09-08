import Styles from './Menu.module.css'
import {useState} from 'react';
import {FaAlignJustify} from 'react-icons/fa';
import {AiOutlineCloseCircle} from 'react-icons/ai'
import Categorias from './ModalCategoria';
export default function Menu({sexo, setSexo, subcategoria, setSubCategoria, setOffset, setCalçados}){
    const [categoryModal, setCategoryModal] = useState(false); //Exibir "quadrado" do modal 
    function add_filtro(novoSexo, novaSubCategoria){
        setSexo(novoSexo); //Adiciona novo sexo
        setSubCategoria(novaSubCategoria); //Adiciona nova subcategoria
        setCategoryModal(false); //Fecha modal
        if(novoSexo!==sexo || novaSubCategoria!==subcategoria){ //Ao mudar filtro
            setCalçados([]); //Se mudar filtro, deleta oq já tem carregado
            setOffset(0); //Ao mudar filtro, reseta offset
        }

    }
    return(
        <>
        {categoryModal===false?
            <ul className={Styles.menuNav}>
                <li onClick={()=>setCategoryModal(true)} className={Styles.centralizarVertical}><FaAlignJustify/>Todas as categorias</li>
                <li onClick={()=>add_filtro("F",'')}>Moda feminino</li>
                <li onClick={()=>add_filtro("M",'')}>Moda masculino</li>
                <li onClick={()=>add_filtro("N",'')}>Moda Unissex</li>
                <li>Sobre</li>
            </ul>
            :
            <ul className={Styles.closeMenuNav}>
                <li onClick={()=>setCategoryModal(false)}><AiOutlineCloseCircle/>Fechar todas categorias</li>
            </ul>
        }
        
        {categoryModal===true&&
            <div className={Styles.categoryModal}>
                <Categorias add_filtro={add_filtro} setCalçados={setCalçados} setOffset={setOffset} sexo={sexo} setSexo={setSexo} setCategoryModal={setCategoryModal} subcategoria={subcategoria} setSubCategoria={setSubCategoria}/>
            </div>
        }
        </>
    )
}