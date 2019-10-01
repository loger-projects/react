import React from 'react'

class AdminLayout extends React.Component{
  render() {
    return (
      <div className="page-container">
        <h1 className="text-center">Admin Layout</h1>
        <div className="page-content">{this.props.children}</div>
      </div>
    )
  }
}

export default AdminLayout
