import React, { useState } from 'react'
import { useParams} from 'react-router-dom'

 

const MealInfo = () => {
    const {mealid}= useParams();
    const[info, setInfo]=useState()
    console.log(mealid)
    const getInfo = async() =>{
        const get =await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`)
        const jsonData = await get.json()
        console.log(jsonData.meals[0])
        setInfo(jsonData.meals[0])
    }
    if(info !== ""){
getInfo()
    }
  return (
    <div>
    
    {
        
        !info? "Data not" : <div className='msg'>
        <img src={info.strMealThumb} alt='g'/>
        <div className='info'>
          <h1>REACIPE detail</h1>
          <button>{info.strMeal}</button>
          <h3>Instruction</h3>
          <p className='loading-message' >{info.strInstructions}</p>
        </div>
      </div>
      
    }
    </div>
  )
}

export default MealInfo
