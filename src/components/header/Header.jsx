import React from "react"
import s from './Header.module.css'
import {NavLink} from "react-router-dom"

const Header = () => {
    return (
      <header className={s.header}>
        <h1>Make me up!</h1>
        <div className={s.wrap}>
          <NavLink activeClassName={s.activeLink}  className={s.primaryNav} to='/Matches'>MATCHES</NavLink>
          <NavLink activeClassName={s.activeLink} className={s.primaryNav} to='/Battles'>BATTLES</NavLink>
        </div>
      </header>
    )
}

export default Header;