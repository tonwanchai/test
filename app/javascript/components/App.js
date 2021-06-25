
import React from 'react'
import Home from './Home'
import Posts from './Posts'
import NewPost from './NewPost'
import Test from './Test'
import { Route, Switch } from 'react-router-dom'
class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/posts" component={Posts} />
          <Route exact path="/new_post" component={NewPost} />
          <Route exact path="/test" component={Test} />
        </Switch>
      </div>
    )
  }
}

export default App