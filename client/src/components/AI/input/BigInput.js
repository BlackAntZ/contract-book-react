import React, {useImperativeHandle, useRef, useState} from 'react';
import classes from "./BigInput.module.css";

const Input = React.forwardRef( (props, ref) => {
  const [inputEmpty, setInputEmpty] = useState(false);
  const inputRef = useRef();

  const {name} = props;
  const {onSubmit} = props;

  const inputEmptyHandler = () => {
    setInputEmpty(true);
  }

  const focus = () => {
    inputRef.current['focus']();
  }

  useImperativeHandle(ref, () => {
    return {focus: focus, empty: inputEmptyHandler}
  })

  const changeHandler = () => {
    const term = inputRef.current["value"].trim();
    const data = {};
    if (term.length === 0) setInputEmpty(true);

    setInputEmpty(false);
    data.term = term;
    onSubmit(name, data);
  }

  return (
    <div className={classes['div']}>
      <input autoComplete={'off'} placeholder={props.label} spellCheck={"false"} defaultValue={props.value} onChange={changeHandler} ref={inputRef} id={props.name} type={props.type}></input>
      <div className={classes['drop_down']}>Kolona</div>
      {inputEmpty && <div className={classes['empty-div']}>{`Unesite ${props.label.toLowerCase()}!`}</div>}
    </div>
  )
})


export default Input;