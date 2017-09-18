import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  createFragmentContainer,
  graphql,
  QueryRenderer
} from 'react-relay'
import Task from './Task'
import environment from './Environment'

const AppAllTasksQuery = graphql`
query AppAllTasksQuery {
    viewer {
      ...App_viewer
    }
}`

class App extends Component {
  render() {
    console.log(1, this.props)
    return (
      <div className="App">
        <QueryRenderer
          environment={environment}
          query={AppAllTasksQuery}
          render={({error, props}) => {
            if (error) {
              return <div>{error.message}</div>
            } else if (props) {
              return <Task viewer={props.viewer} />
            }
            return <div>Loading</div>
          }}
        />
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>

      </div>
    );
  }
}

export default createFragmentContainer(App, graphql`
fragment App_viewer on Viewer {
  allTasks(first: 10) @connection(key: "App_allTasks", filters: []){
    edges {
      node {
        ...Task_task
      }
    }
  }
}`)
