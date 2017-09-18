import {
    createFragmentContainer,
    graphql
  } from 'react-relay'
import React, { Component } from 'react';

class Task extends Component {
    render() {
        console.log(this.props)
        return(
        <div>
            leke
        </div>)
    }
}

export default createFragmentContainer(Task, graphql`
fragment Task_task on Task {
  id
  title
}
`)
