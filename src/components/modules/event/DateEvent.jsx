import React from "react"
import "./DateEvents.css"

const DateEvent =(props) =>{
    return (
      <div className={props.status.status}>
        <div className="time">{props.status.time}</div>
        <div className="day">{props.status.date}</div>
      </div>
    )
}

export default DateEvent;