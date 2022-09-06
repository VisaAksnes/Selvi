import Styles from './Home.module.css';
export default function Home({produtos, setProdutos, sexo, setSexo, funcGen}){


    return(
        <>
        <p className={Styles.exibicao}>Calçados &rarr; {funcGen(sexo)}</p>
        <div className={Styles.container}>
            {produtos&&
                produtos.map((item)=>{
                    return <div key={item['id']} className={Styles.produto}>
                             <img src={item['img']}></img>
                             <p>{item['nome']} - {funcGen(item['sexo'])}</p>
                           </div>
                })
            }
        </div>
        </>
    )
}