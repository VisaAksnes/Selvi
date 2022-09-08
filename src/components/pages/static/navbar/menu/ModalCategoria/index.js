import Styles from './ModalCategoria.module.css';
import BoxPeople from './BoxPeople';
import BoxCategory from './BoxCategory';
import global from "../../../../../../Global.js";
import {useState, useEffect} from 'react';
export default function ModalCategoria({add_filtro,sexo, setSexo, setCategoryModal, subcategoria, setSubCategoria, setOffset, setCalçados}){
    const [peopleSelected, setPeopleSelected] = useState("Masculino");
    const [categoryData, setCategoryData] = useState([]);
    useEffect(()=>{
        fetch("http://localhost/selvibackend/calcados.php?onlycategory=x") //?onlycategory=x
        .then((r)=>r.json())
        .then( (r)=>setCategoryData(r) )
    },[])
    return(
        <div className={Styles.container}>

            <div className={Styles.containerBoxPeople}>
                <BoxPeople src="http://cdn.shopify.com/s/files/1/0611/9391/2507/collections/456.png?v=1646150124" titulo="C" setPeopleSelected={(person)=>setPeopleSelected(person)} sexo={sexo} setSexo={setSexo} setCategoryModal={setCategoryModal} setSubCategoria={setSubCategoria} setOffset={setOffset} setCalçados={setCalçados} add_filtro={add_filtro}/>
                <BoxPeople src="https://res.cloudinary.com/demo/image/upload/c_fill,w_100,h_100,g_face,dpr_2.0/smiling_man.jpg" titulo="M" setPeopleSelected={(person)=>setPeopleSelected(person)} sexo={sexo} setSexo={setSexo} setCategoryModal={setCategoryModal} setSubCategoria={setSubCategoria} setOffset={setOffset} setCalçados={setCalçados} add_filtro={add_filtro}/>
                <BoxPeople src="https://i.pinimg.com/236x/da/c8/d0/dac8d09fa17a9c19ab073fee59829889--alexandria-morgan-girls-with-glasses.jpg" titulo="F" setPeopleSelected={(person)=>setPeopleSelected(person)} sexo={sexo} setSexo={setSexo} setCategoryModal={setCategoryModal} setSubCategoria={setSubCategoria} setOffset={setOffset} setCalçados={setCalçados} add_filtro={add_filtro}/>
                <BoxPeople src="https://t3.ftcdn.net/jpg/01/18/01/98/360_F_118019822_6CKXP6rXmVhDOzbXZlLqEM2ya4HhYzSV.jpg" titulo="N" setPeopleSelected={(person)=>setPeopleSelected(person)} sexo={sexo} setSexo={setSexo} setCategoryModal={setCategoryModal} setSubCategoria={setSubCategoria} setOffset={setOffset} setCalçados={setCalçados} add_filtro={add_filtro}/>
            </div>

            <div className={Styles.containerCategory}>
                <p className={Styles.peopleSelectedTitle}>{global.funcaoGenero(peopleSelected)} - Todos os itens</p>
                { 
                    <BoxCategory 
                        add_filtro={add_filtro}
                        peopleSelected={peopleSelected} 
                        setSexo={setSexo} 
                        setCategoryModal={setCategoryModal} 
                        subcategoria={subcategoria} 
                        setSubCategoria={setSubCategoria} 
                        categoryData={
                            categoryData.filter((item,index,array)=>
                            {
                                if(item.sexo===peopleSelected){
                                    return item; //true
                                }
                                else{
                                    return false;
                                }
                            }
                    )}/>  
                }
            </div>

        </div>
    );
}