import React from 'react'

const TownDetails=(props)=>{
    return(
        <div  id="landmark-name">
            <div id="landmark-title">
                  {props.arrayStates[props.changedState].city[props.changedCity].landmarks[props.changedTown].name}
            </div>
            <div id="landmark-description">
                 {props.arrayStates[props.changedState].city[props.changedCity].landmarks[props.changedTown].description}
            </div>
        </div>
    )
}

export default TownDetails;;