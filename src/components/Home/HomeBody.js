import React from 'react'

class HomeBody extends React.Component{
  render() {
    return (
      <div className="container text-center" style={{ borderTop: '1px solid rgba(#000, .1)' }}>
        <h3>Good Noon {this.props.name}</h3>
        <p>This is home page description</p>
      </div>
    )
  }
}

export default HomeBody
