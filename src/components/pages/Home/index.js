import Styles from './Home.module.css';
import global from "../../../Global.js";

export default function Home({calçados, setCalçados, sexo, setSexo}){
    return(
        <>
        <p className={Styles.exibicao}>Calçados &rarr; {global.funcaoGenero(sexo)}</p>
        <div className={Styles.container}>
            {calçados&&
                calçados.map((item)=>{
                    return <div key={item['id']} className={Styles.produto}>
                             <img src={item['img']} alt="Calçado"></img>
                             <p>{item['nome']} - {global.funcaoGenero(item['sexo'])}</p>
                           </div>
                })
            }
        </div>
        </>
    )
}