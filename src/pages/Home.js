import React from 'react'
import HomeHeader from '../components/Home/HomeHeader'
import HomeBody from '../components/Home/HomeBody'
import HomeFooter from '../components/Home/HomeFooter'

class Home extends React.Component{
  render() {
    return (
      <div className="page-container">
        <HomeHeader/>
        <HomeBody name="Nam"/>
        <HomeFooter/>
      </div>
    )
  }
}

export default Home
