import React, { useState } from 'react'
import "./SearchComponent.css"

const SearchComponent = ({onSearch}) => {
    const [searchUser, setsearchUser] = useState("")

    const handleChange = (event) => {
      setsearchUser(event.target.value);
    }
    const handleSearch = () => {
        onSearch(searchUser)
    }
  return (
    <div className='search-component'>
        <h2>GITHUB SEARCH TOOL</h2>
        <input type="text" value={searchUser} placeholder='Enter username' onChange={handleChange}/>
        <button onClick={handleSearch}>Search</button>
    </div>
  )
}

export default SearchComponent