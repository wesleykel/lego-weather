import React from 'react'
import style from "./searchBar.module.css"


const SearchBar = () => {


    
    
    return (
            <div className={style.wrapper}>
            <label>Search</label>
              <input className={style.input}  type={"text"} placeholder={"Enter a city"}></input>  
            </div>
        )
    }

    export default SearchBar