import Styles from './Home.module.css';
import global from "../../../Global.js";

export default function Home({produtos, setProdutos, sexo, setSexo}){
    return(
        <>
        <p className={Styles.exibicao}>Calçados &rarr; {global.funcaoGenero(sexo)}</p>
        <div className={Styles.container}>
            {produtos&&
                produtos.map((item)=>{
                    return <div key={item['id']} className={Styles.produto}>
                             <img src={item['img']}></img>
                             <p>{item['nome']} - {global.funcaoGenero(item['sexo'])}</p>
                           </div>
                })
            }
        </div>
        </>
    )
}