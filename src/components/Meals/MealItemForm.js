import { useRef, useState } from 'react'
import Input from '../UI/Input'
import classes from './MealItemForm.module.css'

const MealItemForm = props => {
    const [isValidAmount, setIsValidAmount] = useState(true)

    const inputAmountRef = useRef()
    const submitHandler = event => {
        event.preventDefault();
        const enteredAmount = inputAmountRef.current.value
        const enteredAmountNum = +enteredAmount
        if (enteredAmount.trim().length === 0 || enteredAmountNum < 1 || enteredAmountNum > 5){
            setIsValidAmount(false)
            return
        }
        props.onAddToCart(enteredAmountNum)

    }
    return <form className={classes.form} onSubmit={submitHandler}>
        <Input ref={inputAmountRef} label="Amount" input={{
            id: "amount_" + props.id,
            type: "number",
            min: "1",
            max: "5",
            step: "1",
            defaultValue: "1"
        }}/>
        <button>+ Add</button>
        {!isValidAmount && <p>Please enter a valid amount (1-5).</p>}
    </form>
}

export default MealItemForm
