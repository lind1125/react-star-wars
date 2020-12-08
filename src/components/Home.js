import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

//components
import Loader from './common/Loader'



function Home() {

  // setting up initial state
  const [starships, setStarships] = useState([])

  // handler for loader
  const [loading, setLoading] = useState(true)

  // useEffect runs everytime the component loads
  useEffect(() => {
    // pagination solution taken from Monica's code snippet in Slack Debugging
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
     return (starships.map((ship, index) => {
       return (
        <Link to={{pathname:`/starships/${(index +2)}`}} >
          <div key={starships.index} className="col s12 m6">
            <div className="card blue-grey darken-1">
              <div className="card-content white-text">
                <span className="card-title">{ship.name}</span>
              </div>
            </div>
          </div>
        </Link>    
        )
      }))}
  }

  return (
    <div className="container">
      <h1>SHIPS!!!</h1>
     <div className="row">{renderShipList()}</div>
    </div>
  )
}
  
  export default Home;