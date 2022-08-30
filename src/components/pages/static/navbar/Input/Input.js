import Styles from './Input.module.css';
const Input = ({placeholder}) => {
    return(
        <>
            <input type="text" placeholder={placeholder}/>
        </>
    );
}
export default Input;