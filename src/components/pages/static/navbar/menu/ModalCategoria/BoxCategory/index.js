import Styles from './BoxCategory.module.css';
export default function BoxCategory({categoryData, subcategoria, setSubCategoria, setCategoryModal, peopleSelected, setSexo}){
    return(
        <div>
            <ul className={Styles.category}>
                {
                    categoryData.map((item)=>{
                        return <li onClick={()=>{setSubCategoria(item.tipo); setSexo(peopleSelected);setCategoryModal(false)}} key={item.id}>{item.tipo}</li>
                    })
                }
            </ul>
        </div>
    );
}