import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import logo from './media/logo.svg'
import Home from './routes/Home/'
import Route2 from './routes/Route2'
import ProfilePage from './routes/ProfilePage/'
import ContractDetail from './routes/ContractDetail/'
import ContractTable from './routes/ContractTable/'

// test comment
const AppRouter = () => (
  <Router>
    <div className='app'>
      <div className='app-header'>
        <img src={logo} className='app-logo' alt='logo' />
        <a href='/'><h3>BACKER</h3></a>
        <div>
          <a href='/'>  Home  </a>
          <a href='/about/'>  About  </a>
          <a href='/profile/'>  Profile  </a>
        </div>
      </div>
      <Route path='/' exact component={Home} />
      <Route path='/about/' component={Route2} />
      <Route path='/profile/' component={ProfilePage} />
      <Route path='/contract/:title' component={ContractDetail} />
      <Route path='/categories/:category' component={ContractTable} />
    </div>
  </Router>
)
export default AppRouter
