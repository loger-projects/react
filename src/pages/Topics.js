import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import TopicDetails from '../components/Topics/TopicDetails'

class Topics extends React.Component{
  render() {
    return (
      <div>
        <h1 className="text-center">Topics</h1>

        <div className="row m-0">

          <div className="col-4">
            <nav className="navbar navbar-light bg-light">
              <Link to={`${this.props.match.url}`} className="navbar-brand">General</Link>
            </nav>

            <nav className="navbar navbar-light bg-light">
              <Link to={`${this.props.match.url}/Ohrdor`} className="navbar-brand">Ohrdor Topic</Link>
            </nav>

            <nav className="navbar navbar-light bg-light">
              <Link to={`${this.props.match.url}/Radium`} className="navbar-brand">Radium Topic</Link>
            </nav>
          </div>

          <div className="col-8 d-flex justify-content-center align-items-center">
            <Switch>
              <Route path={`${this.props.match.path}/:topicName`} component={TopicDetails}/>

              <Route exact path={`${this.props.match.path}`} >
                <div className="topics">
                  <h1>Hi! Welcome to topic list</h1>
                  <p>Please select your favorite topic</p>
                </div>
              </Route>
            </Switch>
          </div>

        </div>
      </div>
    )
  }
}

export default Topics
