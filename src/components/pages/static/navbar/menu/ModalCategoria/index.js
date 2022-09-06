import Styles from './ModalCategoria.module.css';
import BoxPeople from './BoxPeople';
import BoxCategory from './BoxCategory';
import {useState, useEffect} from 'react';
export default function ModalCategoria({sexo, setSexo, funcGen, setCategoryModal, subcategoria, setSubCategoria}){
    const [peopleSelected, setPeopleSelected] = useState("Masculino");
    const [categoryData, setCategoryData] = useState([]);
    useEffect(()=>{
        fetch("http://localhost/selvibackend/calcados.php")
        .then((r)=>r.json())
        .then( (r)=>setCategoryData(r) )
    },[])
    return(
        <div className={Styles.container}>

            <div className={Styles.containerBoxPeople}>
                <BoxPeople src="http://cdn.shopify.com/s/files/1/0611/9391/2507/collections/456.png?v=1646150124" titulo="C" setPeopleSelected={(person)=>setPeopleSelected(person)} sexo={sexo} setSexo={setSexo} funcGen={funcGen} setCategoryModal={setCategoryModal} setSubCategoria={setSubCategoria}/>
                <BoxPeople src="https://res.cloudinary.com/demo/image/upload/c_fill,w_100,h_100,g_face,dpr_2.0/smiling_man.jpg" titulo="M" setPeopleSelected={(person)=>setPeopleSelected(person)} sexo={sexo} setSexo={setSexo} funcGen={funcGen} setCategoryModal={setCategoryModal} setSubCategoria={setSubCategoria}/>
                <BoxPeople src="https://i.pinimg.com/236x/da/c8/d0/dac8d09fa17a9c19ab073fee59829889--alexandria-morgan-girls-with-glasses.jpg" titulo="F" setPeopleSelected={(person)=>setPeopleSelected(person)} sexo={sexo} setSexo={setSexo} funcGen={funcGen} setCategoryModal={setCategoryModal} setSubCategoria={setSubCategoria}/>
                <BoxPeople src="https://t3.ftcdn.net/jpg/01/18/01/98/360_F_118019822_6CKXP6rXmVhDOzbXZlLqEM2ya4HhYzSV.jpg" titulo="N" setPeopleSelected={(person)=>setPeopleSelected(person)} sexo={sexo} setSexo={setSexo} funcGen={funcGen} setCategoryModal={setCategoryModal} setSubCategoria={setSubCategoria}/>
            </div>

            <div className={Styles.containerCategory}>
                <p className={Styles.peopleSelectedTitle}>{funcGen(peopleSelected)} - Todos os itens</p>
                { 
                    <BoxCategory peopleSelected={peopleSelected} setSexo={setSexo} setCategoryModal={setCategoryModal} subcategoria={subcategoria} setSubCategoria={setSubCategoria} categoryData={categoryData.filter((item,index,array)=>{
                        if(item.sexo===peopleSelected){
                            return item;
                        }
                    })}/>  
                }
            </div>

        </div>
    );
}