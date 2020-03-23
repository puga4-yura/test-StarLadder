import React from "react"
import "../../Card.css"
import DateEvent from "./../../modules/event/DateEvent";
import WatchLive from "./../../modules/event/WatchLive";
import matchesData from './matches-data.json'


const Matches = () =>{
    return (matchesData.map(match=>(
        <div className="main-container__item" key={match.id}>
          <div className="main-container__wrap">
            <div className="main-container__location">{match.title}</div>
            {match.status==="live"?<WatchLive/>: <DateEvent status={match}/>}
          </div>
          <div className="main-container__description-event">
            <div className="main-container__logo-team">
              <img src={match.team1.logo}/>
              <img src={match.team2.logo}/>
            </div>
            <div className={`main-container__wrap ${match.status==="finished" && match.team1.goals<match.team2.goals?'loser-team':''}`}>
              <div className="main-container__name-team">{match.team1.title}</div>
              {match.status==="finished"? <div className="main-container__count-win">{match.team1.goals}</div> :<div className="main-container__coefficient">{match.team1.cof}</div>}
            </div>
            <div className={`main-container__wrap ${match.status==="finished" && match.team1.goals>match.team2.goals?'loser-team':''}`}>
              <div className="main-container__name-team">{match.team2.title}</div>
              {match.status==="finished"? <div className="main-container__count-win">{match.team2.goals}</div> :<div className="main-container__coefficient">{match.team2.cof}</div>}
            </div>
            <div className="main-container__wrap">
              <div>{match.desc}</div>
              <div className="main-container__logo-company"></div>
            </div>
          </div>
        </div>
  )))
}

export default Matches;