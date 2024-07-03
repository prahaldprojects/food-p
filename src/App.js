import './App.css';
import React from 'react'
import Mainpage from './Component/Mainpage';
import {Route,Routes} from 'react-router-dom'
import MealInfo from './Component/Mealinfo';

const App = () => {
  return (
    

  <Routes>
    <Route path='/'element={
       <Mainpage/>}
    ></Route>
    <Route path='/:mealid'element={<MealInfo/>}></Route>
  </Routes>
   
  )
}

export default App
