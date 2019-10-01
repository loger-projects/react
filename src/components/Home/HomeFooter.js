import React from 'react'

class HomeFooter extends React.Component{
  render() {
    return (
      <div className="bg-dark text-white text-center py-2">
        <p className="m-0">Copy right &copy; by {this.props.name}</p>
      </div>
    )
  }
}

export default HomeFooter
