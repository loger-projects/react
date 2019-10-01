import React from 'react'

class TopicDetails extends React.Component{
  render() {
    return (
      <div className="topic-details">
        <h1>Topic {this.props.match.params.topicName}</h1>
        <p className="topic-description">
          Hi! Welcome to {this.props.match.params.topicName} Topic
        </p>
      </div>

    )
  }
}

export default TopicDetails
