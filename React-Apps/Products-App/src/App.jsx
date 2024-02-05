import { useEffect, useState } from 'react'
import './App.css'
import FetchData from './FetchAPI/fetch'
import SearchBoxComponent from './components/SearchBox/SearchBoxComponent'


function App() {
  const [search, setSearch] = useState()
  const [products, setProducts] = useState({ products: [] })

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  const handleKeyDown = (e) => {
if(e.key === 'Enter') {
setProducts(search)
  }
}

  useEffect(() => {
    FetchData()
      .then((data) => {
        console.log(data)
      })
    setProducts(products)
  }, [])

  return (
    <>
      <SearchBoxComponent search={search} handleChange={handleChange} handleKeyDown={handleKeyDown} />
      {/* <HomeComponent /> */}
    </>
  )
}

export default App
