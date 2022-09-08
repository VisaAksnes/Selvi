import Styles from './Home.module.css';
import global from "../../../Global.js";

export default function Home({calçados, sexo, subcategoria, setOffset,offset}){
    return(
        <>
        <p className={Styles.exibicao}>
            Calçados &rarr; {global.funcaoGenero(sexo)}
            {subcategoria&& <span> &rarr; {subcategoria}</span>}
        </p>
        <div className={Styles.generalContainer}>
            <div className={Styles.container}>
                {calçados&&
                    calçados.map((item)=>{
                        return <div key={item['id']+(Math.random()*100)} className={Styles.produto}>
                                <img src={item['img']} alt="Calçado"></img>
                                <p>{item['nome']} - {global.funcaoGenero(item['sexo'])}</p>
                            </div>
                    })
                }
            </div>
            <button onClick={()=>setOffset(offset+3)}>Carregar mais produtos</button>
        </div>
        
        </>
    )
}