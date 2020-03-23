import React from "react"
import DateEvent from "./../../modules/event/DateEvent";
import battlesData from './battles-data.json'
import WatchLive from "../../modules/event/WatchLive";


const Battles = () => {
  return battlesData.map(battle=>(
      <div className="main-container__item main-container__battle" key={battle.id}>
        <div className="main-container__wrap">
          <div className="main-container__location">Group Stage</div>
          {battle.status==="live"?<WatchLive/>: <DateEvent status={battle}/>}
        </div>
        <div className="main-container__description-event">
          <div className="main-container__logo-team">
            <div className="main-container__status-event"></div>
          </div>
          <div className="main-container__wrap">
            <div>
              <div className="main-container__group-name">{battle.group1.title}</div>
              <div className="main-container__group-name">{battle.group2.title}</div>
            </div>
            <div className="containerCountMatch">Match #{battle.id}</div>
          </div>
          <div className="main-container__addition-description">
              {battle.status==='finished'?<img src="/img/reward-logo.png"/>:""}
              <span>{battle.desc}</span>
          </div>
        </div>
      </div>
    ))
}

export default Battles;