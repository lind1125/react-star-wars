import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

//components
import Loader from './common/Loader'
import { render } from '@testing-library/react'


function StarshipPage(props) {
 let apiUrl = props.location.state.ship.url
 // setting up initial state
 const [starshipInfo, setStarshipInfo] = useState({name: '', model: ''})

 // handler for loader
 const [loading, setLoading] = useState(true)

 useEffect(() => {
  axios.get(apiUrl).then((res) =>{
    setStarshipInfo({name: res.data.name, model: res.data.model})
  }).then(() => setLoading(false))
  .catch(err => console.log(err))
 }, [])

 const renderShipInfo = () => {
  if (loading){
      return <Loader />
    }else {
   return ( 
    <div className="col s12 m6">
    <div className="card blue-grey darken-1">
      <div className="card-content white-text">
        <h2>Ship Name: {starshipInfo.name}</h2>
        <h2>Model: {starshipInfo.model}</h2>
      </div>
      <div className="card-action">
        <Link to="/">Return to Starship Directory</Link>
      </div>
    </div>
  </div>
    )
  }}
 
  return (
    <div className="container">
      <h1 className="center">Ship Info!</h1>
      {renderShipInfo()}
    </div>
  )
}
  
  export default StarshipPage;