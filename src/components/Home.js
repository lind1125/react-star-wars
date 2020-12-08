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
    // pagination taken from Monica's code snippet
    let url1 = 'https://swapi.dev/api/starships/'
    let url2 = 'http://swapi.dev/api/starships/?page=2'
    let url3 = 'http://swapi.dev/api/starships/?page=3'
    let url4 = 'http://swapi.dev/api/starships/?page=4'
    const myarray = []
    Promise.all([axios.get(url1),axios.get(url2), axios.get(url3), axios.get(url4)])
    .then(responses=>{
      responses.map(response=>myarray.push(...response.data.results))
      setStarships(myarray, ...starships)
      // console.log(starships)
    })
    .then(() => setLoading(false))
  }, [])

  // function to iterate through called SWAPI data 
  const renderShipList = () => {
    if (loading){
        return <Loader />
      }else {
        console.log(starships)
     return (starships.map((ship) => {
       return (
          <div>
            {ship.name}
          </div>
        )
      }))}
  }

  return (
    <div>
      <h1>SHIPS!!!</h1>
      {renderShipList()}
    </div>
  )
}
  
  export default Home;