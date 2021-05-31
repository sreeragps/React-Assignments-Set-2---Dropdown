import React from 'react'

const CityDropdown=(props)=>{
    return(
        <div>
            <label for="city">Cities:</label>
                    <select name="cars" id="city"  onChange={props.changing}>
                       
                        {								
                                props.arrayStates.map(function(eState,indexState){
                                        if(indexState==props.changedState){
                                        return eState.city.map((eCity,indexCity)=>{
                                            return <option value={indexCity} >{eCity.name}</option>})
                                    }											
                                })					
                        }
                    </select>
       </div>
    )
}

export default CityDropdown;