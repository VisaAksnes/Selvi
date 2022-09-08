import Styles from './BoxPeople.module.css';
import global from "../../../../../../../Global.js";

export default function BoxPeople({add_filtro,setCalçados, setOffset, src, titulo, setPeopleSelected, setSexo, setCategoryModal, setSubCategoria}){ 
    
    function onClickPeople(){
        if(titulo!=='C'){
            add_filtro(titulo,'')
            
        }
        else{ //C é para limpar tudo
            add_filtro('','');
        }
        
    }
    return(
        <div className={Styles.boxPeople} onClick={onClickPeople} onMouseOver={()=>setPeopleSelected(titulo)}>
            <img src={src} alt="Pessoa"/>
            <p>{global.funcaoGenero(titulo)}</p>
        </div>
    )
}