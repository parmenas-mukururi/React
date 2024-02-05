import React, { useEffect, useState } from 'react'
import FetchData from '../FetchAPI/fetch'
import {Outlet} from 'react-router-dom'

const Root = () => {

    const [search, setSearch] = useState()
    const [products, setProducts] = useState([])

    useEffect(() => {
        FetchData()
            .then((data) => {
                console.log(data.products)
                setProducts(data.products)
            })

    }, [])

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            setProducts(search)
        }
    }

    return (
        <div className='products'>
        <div className='searchbox'>
            <Outlet/>
            </div>
            {/* <input type="text" value={search} placeholder='Search an item' onChange={handleChange} onKeyDown={handleKeyDown} /> */}
            {products.map((item) => {
                return (
                    <div className='product-info'>
                        <img src={item.thumbnail} alt="" />
                        <h2>{item.title}</h2>
                        <h3>{`Price : $${item.price}`}</h3>
                        <h5>{`Available items : ${item.stock}`}</h5>
                        <p>{item.description}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Root