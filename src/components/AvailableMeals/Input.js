import React from "react"
import "./MealItem.css"

const Input = React.forwardRef((props, ref) => {
    return (
        <div>
            <input ref={ref} {...props.input}/>
            <label htmlFor={props.input.id}>{props.label}</label>
        </div>
    )
    })

    export default Input