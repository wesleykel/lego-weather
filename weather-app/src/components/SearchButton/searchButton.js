import React from 'react'
import style from "./searchButton.module.css"

const SearchButton = (props) => {
   const {apiCall, label} = props
    return (
        <div className={style.wrapper}>
     <button onClick={apiCall} type='submit'>{label}</button>    
        </div>
    )
}

export default SearchButton