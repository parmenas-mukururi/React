import React from 'react'


const SearchBoxComponent = ({search, handleChange, handleKeyDown, products}) => {


    return (
        <>
          <div className='searchbox'>
            <input type="text" value = {search} onChange={handleChange} onKeyDown={handleKeyDown} placeholder='Enter an item'/>
            {/* <ul>
                {
                    products.map((item)=> {
                        <li>{item.title}</li>
                    })
                }
            </ul> */}
            </div> 
        </>
    )
}

export default SearchBoxComponent