import React, { Fragment } from 'react'
import HeaderCartButton from './HeaderCartButton'
import mealsImg from '../../assets/meals.jpg'
import classes from './Header.module.css'

export default function Header(props) {
  return (
    <Fragment>
        <header className={classes.header}>
            <h1>EdMeals</h1>
            <HeaderCartButton onClick={props.onShowCart}/>
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImg} alt='delicious food served on table'/>
        </div>
    </Fragment>

  )
}
