import React from 'react'
// React Router
import {Route} from 'react-router-dom'

//css
import './css/App.css';

//components
import Home from './components/Home'



function App() {

return (
  <div>
    <Route path="/" exact component={Home} />
  </div>
)
}

export default App;
