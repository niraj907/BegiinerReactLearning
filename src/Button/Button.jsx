import styles from './Button.module.css'
function Button(){
const handleClick =()=>{
    alert('Clothes Brand');
};
    return(
<button className='{styles}' onClick={handleClick}>Click Here</button>

    );
}

export default Button