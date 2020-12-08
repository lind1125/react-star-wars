import React from 'react'
// React Router
import {Route} from 'react-router-dom'

//css
import './css/App.css';

//components
import Home from './components/Home'
import StarshipPage from './components/StarshipPage'



function App() {

return (
  <div>
    <Route path="/" exact component={Home} />
    <Route path="/starships" component={StarshipPage} />
  </div>
)
}

export default App;
