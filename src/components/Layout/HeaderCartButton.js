import CartIcon from '../Cart/CartIcon'
import React, { useContext, useEffect, useState } from 'react'
import CartContext from '../../store/cart-context'
import classes from './HeaderCartButton.module.css'

export default function HeaderCartButton(props) {
  const cartCtx = useContext(CartContext);
  const {items} = cartCtx
  const [animateButton, setAnimateButton] = useState(false);
  const cartItemsNumber = items.reduce((curNumber, item)=>{return curNumber + item.amount}, 0)
  const btnClasses = `${classes.button} ${animateButton ? classes.bump: ''}`


  useEffect(() => {
    if (items.length === 0){
      return
    }
    setAnimateButton(true)
    const timer = setTimeout(() => {
      setAnimateButton(false)
    }, 300)
    return () => {
      clearTimeout(timer)
    }
  }, [items])

  return (
    <button className={btnClasses} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{cartItemsNumber}</span>
    </button>
  )
}
