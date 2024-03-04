import axios from 'axios'


const searchImages = async (SearchValue) => {
    const response = await axios.get('https://api.unsplash.com/search/photos',{
      headers:{
        Authorization:'Client-ID -cF4dhZpKXjtDHtttyKZv7uQvSW654K7yenpUhKU2pA'
      },
      params:{
        query:SearchValue
      }
    })
    return response.data.results
}

export default searchImages