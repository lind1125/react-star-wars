import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { render } from '@testing-library/react'


function Home() {

  // setting up initial state
  const [starships, setStarships] = useState([])

  // useEffect runs everytime the component loads
  useEffect(() => {
    axios.get('https://swapi.dev/api/starships').then((res) => {
      setStarships(res.data)
    })
  }, [])

  const renderShipList = () => {
    console.log(starships)
    return starships.results.map((ship) => {
      return (
        <div>
          {ship.name}
        </div>
      )
    })
  }

  return (
    <div>
      {renderShipList()}
    </div>
  )
}
  
  export default Home;