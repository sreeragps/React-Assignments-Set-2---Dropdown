import React from 'react'

const TownDropdown=(props)=>{
    return(
        <div>
                <label for="towns">Towns:</label>
                <select name="towns" id="landmark" onChange={props.changing}>
                    {
                        props.arrayStates.map(function(eState,indexState){
                            if(indexState==props.changedState){
                                return eState.city.map(function(eCity,indexCity){
                                        if(indexCity==props.changedCity){
                                            return eCity.landmarks.map(function(eLandmark,indexLandmark){
                                                return <option value={indexLandmark} >{eLandmark.name}</option>})
                                        }
                                })
                            }
                        })
                    }
                </select>
        </div>
    )
}

export default TownDropdown;