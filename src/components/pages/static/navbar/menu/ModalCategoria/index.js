import Styles from './ModalCategoria.module.css';
import BoxPeople from './BoxPeople';
import BoxCategory from './BoxCategory';
import {useState} from 'react';
export default function ModalCategoria(){
    const [peopleSelected, setPeopleSelected] = useState("");
    return(
        <div className={Styles.container}>

            <div className={Styles.containerBoxPeople}>
                <BoxPeople src="https://res.cloudinary.com/demo/image/upload/c_fill,w_100,h_100,g_face,dpr_2.0/smiling_man.jpg" titulo="Masculino" setPeopleSelected={(person)=>setPeopleSelected(person)}/>
                <BoxPeople src="https://i.pinimg.com/236x/da/c8/d0/dac8d09fa17a9c19ab073fee59829889--alexandria-morgan-girls-with-glasses.jpg" titulo="Feminino" setPeopleSelected={(person)=>setPeopleSelected(person)}/>
                <BoxPeople src="https://t3.ftcdn.net/jpg/01/18/01/98/360_F_118019822_6CKXP6rXmVhDOzbXZlLqEM2ya4HhYzSV.jpg" titulo="Unissex" setPeopleSelected={(person)=>setPeopleSelected(person)}/>
                <BoxPeople src="https://childresscasa.org/wp-content/uploads/sites/35/2018/08/afro-beautiful-child-1068205-200x200.jpg" titulo="Criança" setPeopleSelected={(person)=>setPeopleSelected(person)}/>
            </div>

            <div className={Styles.containerCategory}>
                <p>{peopleSelected}</p>
                <BoxCategory peopleSelected={peopleSelected}/>
            </div>

        </div>
    );
}