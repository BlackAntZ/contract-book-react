import classes from "./Button.module.css";

const Button = props => {
  return (
    <button onClick={props.open ? props.open : ()=>{}} type={props.type} className={`${classes['btn']}`}>{props.children}</button>
  )
}

export default Button;