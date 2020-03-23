import React from "react"
import s from "./WatchLive.module.css"

const WatchLive = () => {
    return (
      <a className={s.container} href="#">
        <span className={s.button}></span>
        <span className={s.title}>WATCH LIVE!</span>
      </a>
    )
}

export default WatchLive;