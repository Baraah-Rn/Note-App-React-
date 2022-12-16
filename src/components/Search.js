import React from 'react'
import { MdSearch } from "react-icons/md";

const Search = ({handleSearch}) => {
  return (
    <div className='Search-box'>
<MdSearch className='search-icon' size="1.3em"/>
<input 
type="text" 
placeholder="Type to search..." 
className='search-input'
onChange={(event)=>{handleSearch(event.target.value)}}/>
    </div>
  )
}

export default Search