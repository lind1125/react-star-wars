import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

//components
import Loader from './common/Loader'


function StarshipPage(props) {

  console.log(props.location)
  return (
    <div>
      Starships page!
    </div>
  )
}
  
  export default StarshipPage;