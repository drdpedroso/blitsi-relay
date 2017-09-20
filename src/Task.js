import {
    createFragmentContainer,
    graphql
} from 'react-relay'
import React, { Component } from 'react'

class Task extends Component {
  render () {
    const task = this.props.task
    return (
      <div>
        {task.title}
      </div>)
  }
}

export default createFragmentContainer(Task, graphql`
    fragment Task_task on Task {
        id
        title
        status
    }
`)
