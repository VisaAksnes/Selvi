import Styles from './BoxCategory.module.css';
export default function BoxCategory({add_filtro,categoryData, subcategoria, setSubCategoria, setCategoryModal, peopleSelected, setSexo}){
    return(
        <div>
            <ul className={Styles.category}>
                {
                    categoryData.map((item)=>{
                        return <li onClick={()=>{add_filtro(peopleSelected,item.tipo);}} key={item.tipo}>{item.tipo}</li>
                    })
                }
            </ul>
        </div>
    );
}