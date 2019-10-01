import React from 'react'
import 'bootstrap/scss/bootstrap.scss'
import Navigator from './components/Site/Navigator'
import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Detail from './pages/Detail'
import Topics from './pages/Topics'

class App extends React.Component{
  render() {
    return (
      <div className="app-container">
        <Navigator />

        <div className="app-content">
          <Switch>
            <Route exact path="/" component={Home} />

            <Route path="/about" component={About}/>

            <Route path="/detail" component={Detail} />

            <Route path="/topics" component={Topics} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default App;
