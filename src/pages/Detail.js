import React from 'react'
import { Redirect } from 'react-router-dom'

class Detail extends React.Component{
  render() {
    return <Redirect exact to="/topics"/>
  }
}

export default Detail
