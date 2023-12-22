
import { useRef, useState } from "react"
import classes from "./CheckOutForm.module.css"


const isEmpty = (value) => value.trim() === ""
const isFiveChar = (value) => value.trim().length === 5

const CheckOutForm = (props) => {
    const [FormValidity, setFormValidity] = useState({
        name: true,
        street: true,
        postal: true,
        city: true
    })


    const nameInputRef = useRef()
    const streetInputRef = useRef()
    const postalInputRef = useRef()
    const cityInputRef = useRef()

    const confirmHandler = event => {
        event.preventDefault()
        const enteredName = nameInputRef.current.value
        const enteredStreet = streetInputRef.current.value
        const enteredPostal = postalInputRef.current.value
        const enteredCity = cityInputRef.current.value

        const enteredNameIsValid = !isEmpty(enteredName);
        const enteredStreetIsValid = !isEmpty(enteredStreet);
        const enteredPostalIsValid = isFiveChar(enteredPostal);
        const enteredCityIsValid = !isEmpty(enteredCity);

        setFormValidity({
            name : enteredNameIsValid,
            street : enteredStreetIsValid,
            postal: enteredPostalIsValid,
            city : enteredCityIsValid
        })

        const formIsValid = 
        enteredNameIsValid &&
        enteredStreetIsValid &&
        enteredCityIsValid &&
        enteredPostalIsValid

        if (formIsValid) {
            props.onConfirm (
              {  name : enteredName,
                street: enteredStreet,
                city: enteredCity,
                postal : enteredPostal}
            )
        }

        nameInputRef.current.value = '';
        streetInputRef.current.value = '';
        postalInputRef.current.value = '';
        cityInputRef.current.value = '';
    };



    const NameInputInfoClass = `${classes.input_info} ${FormValidity.name ? "" : classes.invalid}`
    const StreetInputInfoClass = `${classes.input_info} ${FormValidity.street ? "" : classes.invalid}`
    const CityInputInfoClass = `${classes.input_info} ${FormValidity.city ? "" : classes.invalid}`
    const PostalInputInfoClass = `${classes.input_info} ${FormValidity.postal ? "" : classes.invalid}`

    return (
        <form className={classes.form_display} onSubmit={confirmHandler}>
            <div className={NameInputInfoClass}>
                <label htmlFor='name'>Your Name</label>
                <input className={classes.input_class} type='text' id='name' ref={nameInputRef} />
                { !FormValidity.name && <p className={classes.error_text}>Please enter a valid name</p>}
            </div>
            <div  className={StreetInputInfoClass}>
                <label htmlFor='street'>Street</label>
                <input className={classes.input_class} type='text' id='street' ref={streetInputRef} />
                { !FormValidity.street && <p className={classes.error_text}>Please enter a valid street adress</p>}
           </div>
            <div  className={PostalInputInfoClass}>
                <label htmlFor='postal'>Postal Code</label>
                <input className={classes.input_class} type='text' id='postal' ref={postalInputRef} />
                { !FormValidity.postal && <p className={classes.error_text}>Please enter a valid postal code</p>}
            </div>
            <div  className={CityInputInfoClass}>
                <label htmlFor='city'>City</label>
                <input className={classes.input_class} type='text' id='city' ref={cityInputRef} />
                { !FormValidity.city && <p className={classes.error_text}>Please enter a valid city name</p>}
            </div>
            <div  className={classes.actions_form}>
                <button type='button' onClick={props.closeCart} >
                    Cancel
                </button>
                <button >Confirm</button>
            </div>
        </form>
    )
}

export default CheckOutForm