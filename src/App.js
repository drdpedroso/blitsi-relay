import React, { Component } from 'react'
import './App.css'
import {
  graphql,
  QueryRenderer
} from 'react-relay'
import TasksList from './TasksList'
import environment from './Environment'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <QueryRenderer
          environment={environment}
          query={AppAllTasksQuery}
          render={({error, props}) => {
            if (error) {
              return <div>{error.message}</div>
            } else if (props) {
              return <TasksList viewer={props.viewer} />
            }
            return <div>Loading</div>
          }}
        />
      </div>
    )
  }
}

const AppAllTasksQuery = graphql`
query AppAllTasksQuery {
    viewer {
      ...TasksList_viewer
    }
}`

export default App
