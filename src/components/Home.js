import React, {useState, useEffect} from 'react'
import axios from 'axios'

//components
import Loader from './common/Loader'



function Home() {

  // setting up initial state
  const [starships, setStarships] = useState([])

  // handler for loader
  const [loading, setLoading] = useState(true)

  // useEffect runs everytime the component loads
  useEffect(() => {
    axios.get('https://swapi.dev/api/starships').then((res) => {
      console.log(res.data)
      setStarships(res.data)
    }).then(() => setLoading(false))
  }, [])

  // function to iterate through called SWAPI data 
  const renderShipList = () => {
    if (loading){
        return <Loader/>
      }else {
     return ( starships.results.map((ship) => {
        return (
          <div>
            {ship.name}
          </div>
        )
      }))}
  }

  return (
    <div>
      {renderShipList()}
    </div>
  )
}
  
  export default Home;