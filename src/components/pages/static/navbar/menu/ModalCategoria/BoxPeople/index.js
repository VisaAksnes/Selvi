import Styles from './BoxPeople.module.css';
import global from "../../../../../../../Global.js";

export default function BoxPeople({src, titulo, setPeopleSelected, sexo, setSexo, setCategoryModal, setSubCategoria}){ 
    
    function onClickPeople(){
        if(titulo!=='C'){
            setSexo(titulo);
            setCategoryModal(false);
            setSubCategoria('');
        }
        else{ //C é para limpar tudo
            setSexo('');
            setSubCategoria('');
            setCategoryModal(false);
        }
        
    }
    return(
        <div className={Styles.boxPeople} onClick={onClickPeople} onMouseOver={()=>setPeopleSelected(titulo)}>
            <img src={src} alt="Pessoa"/>
            <p>{global.funcaoGenero(titulo)}</p>
        </div>
    )
}