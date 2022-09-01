import Styles from './BoxPeople.module.css';
export default function BoxPeople({src,titulo, setPeopleSelected}){ 
    return(
        <div className={Styles.boxPeople} onMouseOver={()=>setPeopleSelected(titulo)}>
            <img src={src}/>
            <p>{titulo}</p>
        </div>
    )
}