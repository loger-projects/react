import React from 'react'
import Navigator from '../components/Site/Navigator'

class SiteLayout extends React.Component{
  render() {
    return (
      <div className="page-container">

        <Navigator/>

        <div className="page-content">{this.props.children}</div>

      </div>
    )
  }
}

export default SiteLayout
