import React from 'react'
import './SearchBoxComponent.css'

const SearchBoxComponent = ({search, handleSearch, handleKeyDown}) => {
  
  return (
    <div>
<input className = 'searchbox' type="text" value = {search} placeholder='Enter a city' onChange={handleSearch} onKeyDown={handleKeyDown} />

    </div>
  )
}

export default SearchBoxComponent