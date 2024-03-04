import { useState } from 'react'
import SearchHeader from './components/SearchHeader'
import './css/App.css'
import searchImages from './components/Api'
import ImageList from './components/ImageList'
import NavBar from './components/NavBar'

function App() {
  const [images, setImages] = useState([])
  const handleSumbit = async (SearchValue) => {
    const result = await searchImages(SearchValue)
    setImages(result)
  }
  return (
    <>   
    <NavBar/>
    <SearchHeader search={handleSumbit}/>
    <ImageList imagesPlaceHolder={images}/>
    </>
  )
}

export default App
