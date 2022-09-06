import Styles from './BoxPeople.module.css';
export default function BoxPeople({src, titulo, setPeopleSelected, sexo, setSexo, funcGen, setCategoryModal, setSubCategoria}){ 
    
    function onClickPeople(){
        if(titulo!='C'){
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
            <img src={src}/>
            <p>{funcGen(titulo)}</p>
        </div>
    )
}