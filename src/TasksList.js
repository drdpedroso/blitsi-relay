import {
    createFragmentContainer,
    graphql
  } from 'react-relay'
import React, { Component } from 'react'
import Task from './Task'

class TasksList extends Component {
  render () {
    return (
      <div>
        {this.props.viewer.allTasks.edges.map(({ node }) => {
          return <Task key={node.__id} task={node} />
        })}
      </div>)
  }
}

export default createFragmentContainer(TasksList, graphql`
fragment TasksList_viewer on Viewer {
  allTasks(first: 10) @connection(key: "TasksList_allTasks", filters: []){
    edges {
      node {
        ...Task_task
      }
    }
  }
}`)
