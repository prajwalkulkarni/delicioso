import classes from './Input.module.css'
export default function Input(props){
    //alert(props.activeclass)
    let activeClass = props.activeclass
    return(
        <div className={classes.input}>
            <label htmlFor={props.input.id}>{props.label}
            </label>

            <input {...props.input} className={activeClass==="error"?classes.error:classes.normal}/>
        </div>
    )
}