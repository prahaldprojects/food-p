import React, { useState } from 'react'
import Mealcard from './Mealcard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { NavLink } from 'react-router-dom';

const Mainpage = () => {
    const [data,setData] =useState()
    const [search, setSearch] = useState("")
    const [msg , setMsg]=useState("")
const handleInput = (event) => {
    setSearch(event.target.value)
}
 const myFun = async () => {
    if(search===""){
        setMsg("PLEASE ENTER")

    }else{

        const get = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
        const jsonData = await get.json()
        console.log(jsonData.meals)
        setData(jsonData.meals)
        setMsg("")
    
     }
    }
 

// console.log(data)
  return (
    <>
    <h1 className='head'>REACIPE APP</h1>
    <div className='container'>
        <div className='searchBar'>
            <input type='text' placeholder='ENTER DISHE' onChange={handleInput}></input>
            <button onClick={myFun}>SEARCH</button>

        </div>
        <h4 className='error'>{msg}</h4>
        <div>
<Mealcard detail={data}/>
        </div>
      
    </div>
    <div className='social-links'>
        <NavLink to="https://www.instagram.com/prahalad_19?utm_source=qr&igsh=MWdrYXpvZnZzMTdpNA==">
          <FontAwesomeIcon icon={faInstagram} />
        </NavLink>
        <NavLink to="https://www.linkedin.com/in/prahalad-prajapat-b59bb0263?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
          <FontAwesomeIcon icon={faLinkedin} />
        </NavLink>
        <NavLink to="https://github.com/prahaldprojects">
          <FontAwesomeIcon icon={faGithub} />
        </NavLink>
      </div>
    </>
  );
}

export default Mainpage;
