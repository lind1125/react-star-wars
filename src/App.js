import React from 'react'
// React Router
import {Route} from 'react-router-dom'

//css
import './css/App.css';

//components
import Home from './components/Home'
import Starships from './components/Starships'



function App() {

return (
  <div>
    <Route path="/" exact component={Home} />
    <Route path="/starships" component={Starships} />
  </div>
)
}

export default App;
